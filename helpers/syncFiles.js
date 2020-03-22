var fs = require('fs');
var path = require("path");


function syncFiles(filepath) {
    let filename = path.basename(filepath)
    let dir = path.dirname(filepath);
    // renameFile(filepath)
    console.log("dir ->", dir)
    switch (dir) {
        case "actions/types":
            createFiles(["reducers", 'actions'], filename)
            break;
        case "actions":
            createFiles(["reducers", "actions/types"], filename)
            break;
        case "reducers":
            createFiles(["actions", "actions/types"], filename)
            break;
        default:
            console.log("no match!")
            return;
    }
}

function createFiles(filetypes, filename) {
    console.log("writing files");
    filetypes.forEach(type => {
        var dir = path.join(type, filename);
        if (dir.includes("index.js")) return;
        fs.appendFile(dir, "", (err, res) => {
            if (err) {
                console.log("err", err);
                return;
            }
        })
    });
}

// function renameFile(filepath) {
//     let filepath_rel = path.join('..', filepath);
//     console.log('filepath', filepath)
//     var filename = path.basename(filepath);
//     var file_dir = path.dirname(filepath)
//     if (filename.includes('.action.js') || filename.includes('.reducer.js') || filename.includes(".type.js")) return
//     console.log("renaming ->", filepath)
//     switch (file_dir) {
//         case "actions/types":
//             fs.renameSync(filepath_rel, filepath_rel.replace('.js', '.type.js'))
//             break;
//         case "reducers":
//             fs.renameSync(filepath_rel, filepath_rel.replace('.js', '.reducer.js'));
//             break;
//         case "actions":
//             fs.renameSync(filepath_rel, filepath_rel.replace('.js', '.action.js'));
//             break;
//         default:
//             console.log('no match');
//             return
//     }
// }

module.exports = syncFiles


