var fs = require("fs");


function readFile(path) {
    return new Promise((res, rej) => {
        try {
            if (!fs.existsSync(path)) {
                // console.log("file path doen't exist")
                res("");
                return
            } 

            fs.readFile(path, (err, data) => {
                if (err) {
                    // console.log("err ---->", err)
                    rej(err)
                    return
                }

                res(data.toString())

            })
        }
        catch (e) {
            // console.log("err ------->", e)
        }
    })
}

module.exports = readFile