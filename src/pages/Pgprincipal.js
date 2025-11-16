import React, { useState } from "react";
import "../App.css";
import pizza from "../img/marguerita.jpg"
import lasanha from "../img/lasanha-bolonhesa-na-pressao.jpg"
import burguer from "../img/hamburguer.jpg"
import strogonof from "../img/strogonoff.jpg"
import salada from "../img/salada.jpg"
import sushi from "../img/sushi.jpg"

const Pgprincipal = () => {
  const [pratos] = useState([
    {
      id: 1,
      nome: "Pizza Margherita",
      descricao: "Molho de tomate, mussarela fresca e manjericão.",
      preco: 35.9,
      imagem: pizza
    },
    {
      id: 2,
      nome: "Lasanha à Bolonhesa",
      descricao: "Camadas de massa fresca com molho de carne e queijo gratinado.",
      preco: 42.5,
      imagem: lasanha
    },
    {
      id: 3,
      nome: "Hambúrguer Artesanal",
      descricao: "Pão brioche, carne 180g, cheddar e molho especial.",
      preco: 28.0,
      imagem: burguer
    },
    {
      id: 4,
      nome: "Strogonoff de Frango",
      descricao: "Frango ao molho cremoso com arroz branco e batata palha.",
      preco: 26.5,
      imagem: strogonof
    },
    {
      id: 5,
      nome: "Salada Caesar",
      descricao: "Alface, frango grelhado, croutons, parmesão e molho caesar.",
      preco: 22.0,
      imagem: salada
    },
    {
      id: 6,
      nome: "Sushi Variado (10 peças)",
      descricao: "Combinado de sushi com salmão, peixe branco e makis.",
      preco: 32.9,
      imagem: sushi
    }
  ]);

  return (
    <div className="cardapio-container">
      <h1>🍽️ Cardápio</h1>
      <div className="pratos-grid">
        {pratos.map((prato) => (
          <div className="prato-card" key={prato.id}>
            <img src={prato.imagem} alt={prato.nome} />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <span>R$ {Number(prato.preco).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pgprincipal;