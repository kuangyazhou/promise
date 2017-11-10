import fs from 'fs';
import path from 'path';
import request from 'request';

let movieDir = __dirname + '/movies';
let exts = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv'];

function readFiles() {
    return new Promise((resolve, reject) => {
        fs.readdir(movieDir, function(err, files) {
            resolve(files.filter(v => {
                exts.inclues(path.path.parse(v).ext);
            }))
        })
    })
}

function save(movieName, url) {
    request.get(Url).pipe(fs.createWriteStream(path.json(movieDir, movieName + '.jpg')));
}
(async() => {
    let files = await readFiles();
    for (let file of files) {
        let name = path.parse(file).name;
        console.log(`正在读取${name}的海报`);
    }
    console.log('读取完成');
})()