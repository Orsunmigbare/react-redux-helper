var fs = require("fs");
var path = require("path");


function createFolders() {
    var asyncTasks = []

    var dirs_to_create = [path.join(".", "reducers"), path.join(".", "actions")];
    dirs_to_create.forEach(dir => {
        if (!fs.existsSync(dir)) {
            asyncTasks.push(
                new Promise((resolve, reject) => {
                    fs.mkdir(dir, (err, res) => {
                        if (err) {
                            console.log("err", err);
                            reject(err)
                            return
                        }
                        if (dir === path.join(".", "actions")) {
                            fs.mkdir(path.join(".", "actions", "types"), (err, res) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                resolve(res);
                                return;
                            })
                        }
                        resolve(res);
                        return
                    })
                })
            )

        }
    })

    return asyncTasks

}

module.exports = createFolders;