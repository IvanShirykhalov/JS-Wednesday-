const fs = require('fs');

const readAsync = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                rej(error)
            } else {
                res(data)
            }
        });
    })
}

async function runRead() {
    // const data1 = await readAsync('db.json')
    // console.log(data1)
    // const data2 = await readAsync('db2.json')
    // console.log(data2)

    const [data1, data2] = await Promise.all([
        readAsync('db.json'),
        readAsync('db2.json'),
    ])

}

async function runWrite() {
    try {
        const isDirExists = await isDirExistsAsync()
        if (!isDirExists) {
            await createDirAsync('database')
        }
        await writeAsync('database/db.json', JSON.stringify([{id: 3, title: 'webstorm'}]))
        console.log('success')
    } catch (err) {
        console.log(err)
    }
}

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