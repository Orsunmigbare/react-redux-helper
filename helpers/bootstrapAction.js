var fs = require("fs");
var path = require("path");


async function bootstrapAction(filepath) {
    filepath = path.join(filepath);
    actionTemplate = `import * as types from "./types" \n \n export const ActionName = () => {
}`
    let fileContent = await fs.readFile(filepath, (err, data) => {
        if (filepath.includes("/index.js") || data.toString().trim()) return
        fs.writeFile(filepath, actionTemplate, (err, data) => {
            if (err) {
                // console.log("err")
            }
            // console.log("succesfully written files")
        })
    });

}

module.exports = bootstrapAction