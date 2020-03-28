var fs = require("fs");
var path = require("path")
var readFile = require("../helpers/readFile");
var prettier = require("prettier");

async function importTypes(filepath) {
    if (filepath.includes("index.js")) return
    let filename = path.basename(filepath);
    let indexPath = path.join('actions', "index.js");
    filepath = path.join('actions', filename);
    let typeIndexContent = prettier.format(await readFile(indexPath), { parser: "babel" });

    if (typeIndexContent.includes(`./${filename.replace(".js", "")}`)) {
        return
    }
    let fileExport = `\n export * from "./${filename.replace('.js', '')}"`;

    fs.appendFile(indexPath, fileExport, (err, res) => {
        if (err) {
            // console.log('err --->', err);
            return;
        };

    })

}

module.exports = importTypes;