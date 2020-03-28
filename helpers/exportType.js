var fs = require("fs");
var path = require("path")
var readFile = require("../helpers/readFile");
var prettier = require("prettier");

async function exportType(filepath) {
    if (filepath.includes("index.js")) return
    let filename = path.basename(filepath);
    let indexPath = path.join('actions', 'types', "index.js");
    filepath = path.join('actions', 'types', filename);
    let typeIndexContent = prettier.format(await readFile(indexPath), { parser: "babel" });

    if (typeIndexContent.includes(`./${filename.replace(".js", "")}`)) {
        ("index exports file already")
        return
    }
    let fileExport = `export * from "./${filename.replace('.js', '')}" \n`;
    // console.log(typeIndexContent, "typeIndex content")

    fs.appendFile(indexPath, fileExport, (err, res) => {
        if (err) {
            // console.log('err --->', err);
            return;
        };

    })

}

module.exports = exportType