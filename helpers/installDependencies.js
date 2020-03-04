var npm = require("npm");
var fs = require("fs");

 function installDependencies() {
    npm.commands.install(['redux', 'react-redux', 'redux-thunk', 'eslint'], (err, res) => {
        if (err) {
            console.log("err", err)
            return
        }
        console.log(res, "instaled packages successfully")
    })
}


module.exports = installDependencies