var path = require("path");
var fs = require("fs");
var readFile = require("../helpers/readFile");
var prettier = require("prettier");

async function watchType(filepath) {
    try {
        filepath = path.join(filepath)
        var changedFile = await readFile(filepath);
        var typeRegex = /!NT\s+[a-zA-z]+\s+/
        var matched = changedFile.match(typeRegex);
        // console.log('matched --->', matched);
        if (matched) {
            // console.log("matched ----->")
            processType(filepath, getType(matched[0]))
        }
    } catch (err) {
        // console.log("err ----->", err)
    }
}


function getType(typeCode) {
    typeCode = typeCode.trim();
    let type = typeCode.slice(1 + typeCode.lastIndexOf(" "));

    return {
        typeCode,
        type
    }
}

async function processType(filepath, typeCode) {
    let fileName = path.basename(filepath);
    let typesPath = path.join("actions", "types", fileName);
    let typesFile = await readFile(typesPath);
    typesFile = prettier.format(typesFile, { semi: false, parser: "babel" });
    if (typesFile.length) {
        typesFile = typesFile + `\n export const ${typeCode.type} = "${typeCode.type}"`
        // console.log("typesfile", typesFile);
    } else {
        typesFile = `export const ${typeCode.type} = "${typeCode.type}"`
    }

    fs.writeFileSync(typesPath, prettier.format(typesFile, { semi: false, parser: "babel" }));

    let fileContent = await readFile(filepath)
    fileContent = fileContent.replace(typeCode.typeCode, `types.${typeCode.type}`);
    // console.log("file content ------->", fileContent)
    fs.writeFileSync(filepath, fileContent);



    // fs.appendFileSync(typesPath, `exoprt const ${typeCode.type} = ${typeCode.type}`);
    // let fileContent = prettier.format(await readFile(filepath), { semi: false}) ;
    // fileContent = fileContent.replace(typeCode.typeCode, `types.${type}`);
    // fs.writeFileSync(filepath, fileContent);

}



module.exports = watchType
