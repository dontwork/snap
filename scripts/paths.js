const path = require('path')

module.exports = {
    app: [ path.join(__dirname, "../src"), path.join(__dirname, "../lib")],
    build: path.join(__dirname, "../dist")
}