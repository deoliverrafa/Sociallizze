const path = require('path')

module.exports = {
    entry: './controller.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '')
    }
}