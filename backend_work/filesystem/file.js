const fs = require("fs");

console.log("Opening an existing file");

const openfile = () => {
    fs.open("input.txt", "r+", function (err, fd) {
        if (err) {
            return console.log(err);
        }
        console.log("File open successful");
    });
};

const readfile = () => {
    fs.readFile("input.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log("File content:", data);
    });
};

const unlinkfile = () => {
    fs.unlink("input.txt", (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("File deleted successfully!");
    });
};

const writefile = () => {
    fs.writeFile("input.txt", "Hello World!!", function (err) {  // Fixed here
        if (err) {
            return console.error(err);
        }

        console.log("Data written successfully!");
        console.log("Let's read the newly written data");

        fs.readFile("input.txt", "utf8", function (err, data) { // Added encoding
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data);
        });
    });
};

module.exports = { openfile, readfile, unlinkfile, writefile };
