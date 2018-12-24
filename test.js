const babel = require('@babel/core')
const preset = require('.')

const source = `
    import stream from '@bit/myshkouski.espruino.modules.stream'
`

const compiled = babel.transformSync(source, {
    filename: 'index.js',
    presets: [
        preset()
    ]
})

console.log(compiled.code)