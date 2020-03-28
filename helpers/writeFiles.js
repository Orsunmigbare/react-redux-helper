var fs = require("fs");
var rootReducerTemplate = require("../templates/rootReducer");
const Spinner = require('cli-spinner').Spinner;



 function writeFiles() {
    const promises = []
    var spinner = new Spinner('Writing files.. %s');
    spinner.setSpinnerString('|/-\\');
    spinner.start();
    var dirs_to_create = ["reducers", "actions", "actions/types"]


    dirs_to_create.forEach((dir) => {
       promises.push( new Promise((res, rej) => {
            fs.writeFile(dir + '/index.js', dir.includes("reducers") ? rootReducerTemplate : "", (err, data) => {
                if (err) {
                    rej(err)
                }
                res("")
            })
       }))
        
        
        return new Promise(async (resolve, reject) => {
            try {
                await Promise.all(promises);
                spinner.stop();
                console.log("Files written successfully...");;
                resolve()
            } catch (e) {
                reject(e)
            }
           
        })
        
     
    })
}

module.exports = writeFiles