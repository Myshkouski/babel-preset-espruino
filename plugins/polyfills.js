const { addSideEffect } = require('@babel/helper-module-imports')

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

    return () => {
        const imported = new Set()
        
        return {
            visitor: {
                Program(p) {
                    Object.values(p.scope.globals).forEach(node => {
                        if (availableShims.has(node.name) && !imported.has(node.name)) {
                            const source = path.join(moduleName, pathname, node.name).replace(new RegExp('\\' + path.sep, 'g'), '/')
                            addSideEffect(p, source)
                            imported.add(node.name)
                        }
                    })
                }
            }
        }
    }
}