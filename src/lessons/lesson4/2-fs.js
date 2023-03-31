const fs = require('fs');

//read()
createDir()
//write()

fs.exists('database', (isExists) => {
    if (!isExists) {
        fs.mkdir('database', (err) => {
            console.log(err)
            write()
        })
    } else {
        write()
    }
})

function read() {
    fs.readFile('db.json', 'utf8', (_, data) => {
        console.log(data);

        fs.readFile('db2.json', 'utf8', (_, data2) => {
            console.log(data2)
        })
    });
}

function createDir() {
    fs.mkdir('database', (err) => {
        if (err) {
            console.error(err);
        }
    })
}

function write() {
    fs.writeFile('database/db.json', JSON.stringify([{id: 3, title: 'webstorm'}]), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}