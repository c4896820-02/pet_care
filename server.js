const http = require("http");
const next = require("next");

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

const app = next({ dev: false, dir: __dirname, hostname: host, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => handle(req, res))
    .listen(port, host, () => {
      console.log(`Next server ready at http://${host}:${port}`);
    });
});
