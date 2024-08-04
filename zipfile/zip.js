const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

function createZip(sourceDir, outPath) {
    if (!fs.existsSync(sourceDir)) {
        console.error(`Source directory ${sourceDir} does not exist`);
        return;
    }

    const outDir = path.dirname(outPath);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const output = fs.createWriteStream(outPath);
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });


    output.on('close', function() {
        console.log(`${archive.pointer()} total bytes`);
        console.log('Zip file has been created successfully');
    });


    archive.on('warning', function(err) {
        if (err.code === 'ENOENT') {
            console.warn('Warning:', err);
        } else {
            throw err;
        }
    });


    archive.on('error', function(err) {
        throw err;
    });


    archive.pipe(output);


    archive.directory(sourceDir, false);


    archive.finalize();
}


const sourceDir = 'path/to/source/folder';
const outPath = 'path/to/output/filename.zip';

createZip(sourceDir, outPath);