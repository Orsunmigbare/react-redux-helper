var fs = require("fs");
var rootReducerTemplate = require("../templates/rootReducer")

function writeFiles() {
    var dirs_to_create = ["reducers", "actions", "actions/types"]
    dirs_to_create.forEach((dir) => {
        fs.writeFile(dir + '/index.js', dir.includes("reducers") ? rootReducerTemplate : "", (err, data) => {
            if (err) {
                console.log('err ----->', err)
            }
        })
    })
}

module.exports = writeFiles