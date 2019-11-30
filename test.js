const babel = require('@babel/core')
const espruino = require('.')

const source = `
    import stream from 'stream'

    const a = () => console.log(this)

    a.call(0)
`

const compiled = babel.transformSync(source, {
    filename: 'index.js',
    presets: [
        espruino()
    ]
})

console.log(compiled.code)