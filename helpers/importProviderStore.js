var prettier = require("prettier");

function importProviderStore(indexFile) {
    indexFile = prettier.format(indexFile, { semi: true, parser: "babel" });
    var lastImport = indexFile.lastIndexOf("import");
    var insertindex = indexFile.indexOf(";", lastImport);
    var indexFileArray = indexFile.split("");
    indexFileArray.splice(insertindex + 1, 0, '\n import {Provider} from "react-redux" \n  import store from "./store" \n');
    indexFile = indexFileArray.join("");
    return prettier.format(indexFile, { semi: false, parser: "babel" });
}


module.exports = importProviderStore;