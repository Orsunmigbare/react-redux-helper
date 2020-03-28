// var npm = require("npm");
// var fs = require("fs");
const { exec } = require("child_process");
const Spinner = require('cli-spinner').Spinner;
 
function installDependencies() {
    var spinner = new Spinner('Installing Dependencies.. %s');
    spinner.setSpinnerString('|/-\\');
    spinner.start();
    return new Promise(function (resolve, reject) {
        // console.log(`Installing Dependencies ... `);
        var cmd = `npm install redux react-redux redux-thunk`;
        if (/^win/.test(process.platform)) {  // If windows, ...
            cmd = `${process.env.comspec} /c ${cmd}`;
        }

        exec(cmd, function (err) {
            if (err != null) {
                spinner.stop(true);
                console.log("\nError Installing Dependencies");
                reject(err);
            } else {
                console.log("\nInstalled Dependencies successfully");
                spinner.stop(true);
                resolve();
            }
        });
    });
    // npm.commands.install(['redux', 'react-redux', 'redux-thunk'], (err, res) => {
    //     if (err) {
    //         console.log("err", err)
    //         return
    //     }
    //     // console.log(res, "instaled packages successfully")
    // })
}




module.exports = installDependencies