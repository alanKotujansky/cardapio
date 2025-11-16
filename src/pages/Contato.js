import React, { useState } from "react";
import api from "../api";
import "../App.css";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/mensagens", form);
      setEnviado(true);
      setForm({ nome: "", email: "", mensagem: "" });
    } catch (err) {
      alert("Erro ao enviar mensagem!");
    }
  };

  return (
    <div className="contato-container">
      <h1>📩 Contato</h1>
      {enviado && <p className="sucesso">Mensagem enviada com sucesso!</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Digite sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;