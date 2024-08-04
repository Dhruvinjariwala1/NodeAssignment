const fs = require('fs');
const unzipper = require('unzipper');

const zipFilePath = './example.zip';

const extractDir = './extracted';

if (!fs.existsSync(extractDir)) {
    fs.mkdirSync(extractDir);
}

fs.createReadStream(zipFilePath)
    .pipe(unzipper.Extract({ path: extractDir }))
    .on('finish', () => {
        console.log('Extraction complete!');
    })
    .on('error', (err) => {
        console.error('Error extracting zip file:', err);
    });