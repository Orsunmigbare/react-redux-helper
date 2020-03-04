var fs = require("fs");
var path = require("path");
var reducerTemplate = require("../templates/reducerTemplate");

async function bootstrapReducer(filepath) {
    filepath = path.join("..", filepath);
    let fileContent = await fs.readFile(filepath, (err, data) => {
        if (filepath.includes("/index.js") || data.toString().trim()) return
        fs.writeFile(filepath, reducerTemplate, (err, data) => {
            if (err) {
                console.log("err")
            }
            console.log("succesfully written files")
        })
    });

}

module.exports = bootstrapReducer