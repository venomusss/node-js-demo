const fs = require('fs');
const path = require('path');

//create directory
// fs.mkdirSync(path.resolve(__dirname, "dir1", 'dir2', 'dir3'), {recursive:true})
// console.log('start')
// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('complete')
// })
// console.log('end')


//delete directory
// fs.rmdir(path.resolve(__dirname, 'dir'), (err)=>{
//     if (err){
//         throw err;
//     }
// })

//create file
// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'dadaad ad', (err)=>{
//     if (err){
//         throw err;
//         return;
//     }
//     console.log('file is created')
// })

//add info to file
// fs.appendFile(path.resolve(__dirname, 'text.txt'), ' end', (err)=>{
//     if (err){
//         throw err;
//         return;
//     }
//     console.log('file info is changed')
// })

//working with file-system with promises

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFile = async (path) => {
    return new Promise(((resolve, reject) => fs.readFile(path, {encoding:'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data);
    })))
}

const removeFile = async (path) => {
    return new Promise(((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve();
    })))
}

writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 1'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 2'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 3'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 4'))
    .then(()=> readFile(path.resolve(__dirname, 'text.txt')))
    .then(data => console.log(data))
    .then(()=> removeFile(path.resolve(__dirname, 'text.txt')))
    .catch(err => console.log(err))