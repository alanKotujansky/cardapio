require("@babel/register")({
  presets: ["@babel/preset-react", "@babel/preset-env"]
});

const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("./src/App.jsx").default;
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Servir CSS
app.get("/app.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.send(fs.readFileSync(path.join(__dirname, "src/App.css"), "utf-8"));
});

app.get("*", (req, res) => {
  try {
    const appComponent = React.createElement(App);
    const html = renderToString(appComponent);

    const css = fs.readFileSync(path.join(__dirname, "src/App.css"), "utf-8");

    res.send(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Cardápio</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
          <script>
            // Cliente React mínimo
            const App = ${JSON.stringify(html)};
            document.getElementById('root').innerHTML = App;
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Erro ao renderizar:", error);
    res.status(500).send("Erro ao renderizar a página");
  }
});
  try {
    const appComponent = React.createElement(App);
    const html = renderToString(appComponent);

    const css = fs.readFileSync(path.join(__dirname, "src/App.css"), "utf-8");

    res.send(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Cardápio</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
          <script>
            // Cliente React mínimo
            const App = ${JSON.stringify(html)};
            document.getElementById('root').innerHTML = App;
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Erro ao renderizar:", error);
    res.status(500).send("Erro ao renderizar a página");
  }
    ;

app.listen(PORT, () => {
  console.log(`🚀 Servidor React rodando em http://localhost:${PORT}`);
});
