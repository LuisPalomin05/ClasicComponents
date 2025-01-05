const fs = require('fs');
const path = require('path');

function createHtmlenv() {
    const filename = 'index.html';

    const Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/main.css">
    <title>Document</title>
</head>
<body>
    
    <script src="./assets/js/main.js"></script>
</body>
</html>
`;

    // Crear el archivo HTML principal
    File(filename, Template);

    // Crear las carpetas de assets
    const folderPath = './assets';
    const folderjs = path.join(folderPath, 'js');
    const foldercss = path.join(folderPath, 'css');

    Folder(folderjs, () => {
        // Crear el archivo main.js dentro de la carpeta js
        const jsFilePath = path.join(folderjs, 'main.js');
        File(jsFilePath, '// Archivo JS inicial');
    });

    Folder(foldercss, () => {
        // Crear el archivo main.css dentro de la carpeta css
        const cssFilePath = path.join(foldercss, 'main.css');
        File(cssFilePath, '/* Archivo CSS inicial */');
    });
}

function File(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) throw err;
        console.log(`Archivo creado: ${fileName}`);
    });
}

function Folder(folderPath, callback) {
    fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`Carpeta creada: ${folderPath}`);
        if (callback) callback();
    });
}

module.exports = createHtmlenv;
