const {readFile, writeFile} = require('fs');

writeFile("./temporary/fileB.txt", "This is the first line\n", (err, result) => {
    console.log("On line 1");
    if (err) {
        console.log("Oops, there was an error: ", err)
    } else {
        console.log("Onto the next");
    }
    writeFile("./temporary/fileB.txt", "This is the second line\n", {flag: 'a'}, (err, result) => {
        console.log("On line 2");
    if (err) {
        console.log("Oops, there was an error: ", err)
    } else {
        console.log("Onto the next");
    }
    writeFile("./temporary/fileB.txt", "This is the last line!", {flag: 'a'}, (err, result) => {
        console.log("On line 3");
    if (err) {
        console.log("Oops, there was an error: ", err)
    } else {
        console.log("Woohoo! This is the end");
    }
    })
    })
})