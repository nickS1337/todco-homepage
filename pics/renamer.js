//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
//passsing directoryPath and callback function
fs.readdir(__dirname + "/instagram", function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach

    for (var i = 0; i < files.length; i++){

        fs.renameSync(__dirname + "/instagram/" + files[i], __dirname + "/instagram/" + i + ".jpg");
        console.log("Renamined " + files[i] + " to " + i + ".jpg");

    }

    console.log(files);

});
