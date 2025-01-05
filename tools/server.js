function server() {
  const http = require("http");
  const fs = require("fs");
  const path = require("path");
  const WebSocket = require("ws");

  // Configuración
  const PORT = 3000;
  const ROOT = "."; // Directorio raíz para servir archivos

  // Script que se inyectará automáticamente en los archivos HTML
  const liveReloadScript = `
<script>
    const socket = new WebSocket('ws://localhost:3000');
    socket.onmessage = (event) => {
        if (event.data === 'reload') {
            window.location.reload();
        }
    };
</script>
`;

  // Crear el servidor HTTP
  const server = http.createServer((req, res) => {
    let filePath = path.join(ROOT, req.url === "/" ? "index.html" : req.url);

    // Determinar el tipo de contenido según la extensión del archivo
    const extname = path.extname(filePath);
    const mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
    };

    const contentType = mimeTypes[extname] || "application/octet-stream";

    // Leer y devolver el archivo solicitado
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>404: Archivo no encontrado</h1>", "utf-8");
        } else {
          res.writeHead(500);
          res.end(`Error del servidor: ${err.code}`);
        }
      } else {
        // Si es un archivo HTML, inyectar el script para recarga automática
        if (contentType === "text/html") {
          content = content.replace("</body>", `${liveReloadScript}</body>`);
        }

        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  });

  // Crear el servidor WebSocket
  const wss = new WebSocket.Server({ server });

  // Manejar las conexiones WebSocket
  wss.on("connection", (ws) => {
    console.log("Cliente conectado");
  });

  // Monitor de cambios en archivos
  fs.watch(ROOT, { recursive: true }, (eventType, filename) => {
    if (filename) {
      console.log(`Archivo modificado: ${filename}`);
      // Enviar una señal de recarga a todos los clientes conectados
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send("reload");
        }
      });
    }
  });

  // Iniciar el servidor HTTP
  server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
  });
}

module.exports = server;
