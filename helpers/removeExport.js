var fs = require("fs");
var path = require("path")
var readFile = require("../helpers/readFile");
var prettier = require("prettier");

async function removeExport(filepath) {
    if (filepath.includes("index.js")) return
    let filename = path.basename(filepath);
    let indexPath = path.join('actions', 'types', "index.js");
    filepath = path.join('actions', 'types', filename);
    let typeIndexContent = prettier.format(await readFile(indexPath), { parser: "babel" });
    if (typeIndexContent.includes(`./${filename.replace(".js", "")}`)) {
        console.log("index exports file already");
        console.log(typeIndexContent, "typeIndex content");
       typeIndexContent =  typeIndexContent.replace(`export * from "./${filename.replace('.js', '')}"`, "");
    }

    console.log(typeIndexContent, "typeIndex content")

    fs.writeFile(indexPath, prettier.format(typeIndexContent, { parser: "babel" }), (err, res) => {
        if (err) {
            console.log('err --->', err);
            return;
        };

    })

}

module.exports = removeExport