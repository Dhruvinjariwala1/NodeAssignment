const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filePath) {
    try {
        await unlinkAsync(filePath);
        console.log(`File ${filePath} has been deleted`);
    } catch (error) {
        console.error(`Error deleting file ${filePath}:`, error);
    }
}


const filePath = 'path/to/your/file.txt';
deleteFile(filePath);