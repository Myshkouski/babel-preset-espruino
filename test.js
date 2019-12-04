const babel = require('@babel/core')
const espruino = require('.')
const polyfills = require('./plugins/polyfills')

const source = `
    import stream from 'stream'

    const buffer = new ArrayBuffer()

    const a = () => console.log(this)
    const b = () => console.log(this)

    a.call(0)
`

const compiled = babel.transformSync(source, {
    filename: 'index.js',
    presets: [
        espruino()
    ]
})

console.log(compiled.code)