const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const file = await fs.readdir(rootDir)
    walk(file, rootDir)
} 

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)
        console.log(file, stats.isDirectory())
    }
}

readdir('C:\\Users\\PC\\Documents\\Estudos\\cursoJS_e_TS')