var prettier = require("prettier")

function insertProvider(indexFile, appPos) {
    const appArray = indexFile.split("");
    appArray.splice(appPos.insertIndex, 0, '\n <Provider store={store}>');
    appArray.splice(appPos.closingIndex, 0, '\n </Provider>');
    let newIndexFile = prettier.format(appArray.join(""), { semi: false, parser: "babel" });
    return newIndexFile;
}

module.exports = insertProvider;