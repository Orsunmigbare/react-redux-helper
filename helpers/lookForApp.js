function lookForApp(App) {
    var rootComponent = "<App />"
    var rootComponentIndex = App.indexOf("<App />");

    // var defaultExport = App.slice(defaultExportIndex + 15).trim();
    // var indexOfComponent = App.indexOf(" " + defaultExport + " ");
    // var insertIndex = App.indexOf("return (", indexOfComponent)

    return {
        insertIndex: rootComponentIndex,
        closingIndex: rootComponentIndex + rootComponent.length + 1
    }
}

module.exports = lookForApp;