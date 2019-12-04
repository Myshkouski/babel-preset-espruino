module.exports = (options = {}) => {
    const path = require('path')
    const fs = require('fs')

    const { module: moduleName, pathname } = options

    if(!moduleName) {
        throw new ReferenceError(`"options.module" must be specified`)
    }

    const moduleDir = path.dirname(require.resolve(path.join(moduleName, 'package.json')))
    const modules = fs.readdirSync(path.join(moduleDir, pathname)).map(pathname => path.parse(pathname).name)
    const availableShims = new Set(modules)

    return ({ types }) => {
        return {
            visitor: {
                Program(p) {
                    Object.values(p.scope.globals).forEach(node => {
                        if (availableShims.has(node.name)) {
                            const importFrom = path.join(moduleName, pathname, node.name).replace(new RegExp('\\' + path.sep, 'g'), '/')
                            const importLiteral = types.stringLiteral(importFrom)
                            const importDeclaration = types.importDeclaration([], importLiteral)
                            p.unshiftContainer('body', importDeclaration)
                        }
                    })
                }
            }
        }
    }
}