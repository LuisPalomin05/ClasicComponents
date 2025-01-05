const fs = require("fs");
const path = require("path");

function createReactenv() {
  const filename = "app.js";
  const indexfile = "index.js";

  const Template = `
import React from 'react';
import './src/style/app.css'

const App = () => (
<div>
<h1>Welcome to React App</h1>
</div>
);

export default App;
`;

  const tempIndex = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './src/style/index.css'

ReactDOM.render(<App />, document.getElementById('root'));`;

  // Crear el archivo HTML principal
  File(filename, Template);
  File(indexfile, tempIndex);

  // Crear las carpetas de assets
  const folderPath = "./src";
  const folderComponents = path.join(folderPath, "components");
  const folderStyle = path.join(folderPath, "style");
  const folderPages = path.join(folderPath, "pages");

  Folder(folderPages, () => {
    // Crear el archivo main.js dentro de la carpeta js
    const jsFilePath = path.join(folderPages, "main.js");
    const maintmp = `

import React, { Component } from 'react'
import './src/style/main.css'

export default class main extends Component {

render() {
return (
<div>
<p>React</p>

</div>
)
}
}
`;
    File(jsFilePath, maintmp);
  });

  Folder(folderStyle, () => {
    // Crear el archivo main.css dentro de la carpeta css
    const cssFilePath = path.join(folderStyle, "main.css");
    const cssbodyFilePath = path.join(folderStyle, "body.css");
    const cssAppFilePath = path.join(folderStyle, "App.css");
    const cssIndexFilePath = path.join(folderStyle, "index.css");

    File(cssFilePath, "/* Archivo CSS inicial */");
    File(cssbodyFilePath, "/* css body");
    File(cssAppFilePath, "/* css App");
    File(cssIndexFilePath, "/* css Index");
  });

  Folder(folderComponents, () => {
    const filename = "body";
    const filecomponent = filename + ".js";

    const componentfile = path.join(folderComponents, filecomponent);
    const componentTemplate = `
import React, { Component } from 'react'
import './src/style/body.css'

export default class ${filename} extends Component {

render() {
return (
<div>
<p>React</p>

</div>
)
}
}
`;
    File(componentfile, componentTemplate);
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

module.exports = createReactenv;
