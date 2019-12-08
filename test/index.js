const fs = require('fs')
const babel = require('@babel/core')
const espruino = require('..')
const polyfills = require('../plugins/polyfills')

const source = fs.readFileSync(__dirname + '/input.js')

const compiled = babel.transformSync(source, {
    filename: 'index.js',
    presets: [
        espruino()
    ]
})

fs.writeFileSync(__dirname + '/output.js', compiled.code)
console.log(compiled.code)