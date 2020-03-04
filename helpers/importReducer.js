var fs = require("fs");
var path = require("path")
var readFile = require("./readFile");
var prettier = require("prettier");

async function importReducer(filepath) {
    if (filepath.includes("index.js")) return
    let filename = path.basename(filepath);
    let indexPath = path.join("..", 'reducers', "index.js");
    filepath = path.join("..", 'actions', 'types', filename);
    let typeIndexContent = prettier.format(await readFile(indexPath), { parser: "babel" });

    if (typeIndexContent.includes(`./${filename.replace(".js", "")}`)) {
        console.log("index exports file already");
        return
    }
    let fileImport = `\n import ${filename.replace(".js", "")} from "./${filename.replace('.js', '')}"`;
    let typeIndex = typeIndexContent.split("");
    typeIndex.splice(typeIndexContent.indexOf(';', typeIndexContent.lastIndexOf("import")), 0, fileImport);
    typeIndexContent = typeIndex.join("");
    typeIndex = typeIndexContent.split("");
    console.log("typeindex conetnt -------->", typeIndex.join(""))
    console.log("next index of }", typeIndexContent.indexOf('}', typeIndexContent.indexOf("combineReducers({")));
    typeIndex.splice(typeIndexContent.indexOf('}', typeIndexContent.indexOf("combineReducers({")), 0, typeIndexContent[typeIndexContent.indexOf("combineReducers({") + 1 ] === "}" ? filename.replace(".js", "") : "," + filename.replace(".js", ""))
    typeIndexContent = typeIndex.join("");

    console.log("typeIndex", typeIndex.join(""))

    fs.writeFile(indexPath, prettier.format(typeIndexContent, { parser: "babel" }), (err, res) => {
        if (err) {
            console.log('err --->', err);
            return;
        };

    })

}

module.exports = importReducer