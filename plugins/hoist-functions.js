// const hoist = require('@babel/helper-hoist-variables')

module.exports = (options = {}) => {
    return ({ types }) => {
        return {
            pre() {
                this.cache = new Set()
            },
            visitor: {
                FunctionDeclaration(path, state) {
                    path.container.sort((a, b) => {
                        if (a.type == path.type) {
                            return (b.type == path.type) ? 0 : -1
                        }

                        return 0
                    })
                }
            }
        }
    }
}