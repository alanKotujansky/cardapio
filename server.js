// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Permite que o React se conecte
app.use(cors());
app.use(express.json());

let mensagens = []; // armazenamento temporário (poderia ser um banco de dados)

// rota para receber mensagens do formulário
app.post("/mensagens", (req, res) => {
  const { nome, email, mensagem } = req.body;
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }
  const novaMensagem = { id: mensagens.length + 1, nome, email, mensagem };
  mensagens.push(novaMensagem);
  res.status(201).json({ message: "Mensagem recebida!", data: novaMensagem });
});

// rota para listar mensagens (opcional)
app.get("/mensagens", (req, res) => {
  res.json(mensagens);
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
