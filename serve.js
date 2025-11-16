const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, "build")));

// Rota para servir o index.html em qualquer rota (para React Router funcionar)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});


