var fs = require("fs");


function readFile(path) {
    return new Promise((res, rej) => {
        if (!fs.existsSync(path)) {
            res("");
            return
        }
        fs.readFile(path, (err, data) => {
            if (err) {
                console.log("err ---->", err)
                rej(err)
                return
            }

            res(data.toString())

        })
    })
}

module.exports = readFile