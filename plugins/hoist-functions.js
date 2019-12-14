module.exports = (options = {}) => {
    return () => {
        return {
            pre() {
                this.cache = new Set()
            },
            visitor: {
                FunctionDeclaration(path) {
                    if (Array.isArray(path.container)) {
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
}