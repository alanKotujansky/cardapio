import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('cardapio');
  const [enviado, setEnviado] = useState(false);

  const pratos = [
    {
      id: 1,
      nome: "Pizza Margherita",
      descricao: "Molho de tomate, mussarela fresca e manjericão.",
      preco: 35.9,
      imagem: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='220'%3E%3Crect fill='%23d35400' width='300' height='220'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='white' text-anchor='middle' dy='.3em'%3E🍕%3C/text%3E%3C/svg%3E"
    },
    {
      id: 2,
      nome: "Lasanha à Bolonhesa",
      descricao: "Camadas de massa fresca com molho de carne e queijo gratinado.",
      preco: 42.5,
      imagem: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='220'%3E%3Crect fill='%238b4513' width='300' height='220'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='white' text-anchor='middle' dy='.3em'%3E🍝%3C/text%3E%3C/svg%3E"
    },
    {
      id: 3,
      nome: "Hambúrguer Artesanal",
      descricao: "Pão brioche, carne 180g, cheddar e molho especial.",
      preco: 28.0,
      imagem: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='220'%3E%3Crect fill='%23cd5c5c' width='300' height='220'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='white' text-anchor='middle' dy='.3em'%3E🍔%3C/text%3E%3C/svg%3E"
    },
    {
      id: 4,
      nome: "Strogonoff de Frango",
      descricao: "Frango ao molho cremoso com arroz branco e batata palha.",
      preco: 26.5,
      imagem: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='220'%3E%3Crect fill='%236b5d40' width='300' height='220'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='white' text-anchor='middle' dy='.3em'%3E🍗%3C/text%3E%3C/svg%3E"
    },
    {
      id: 5,
      nome: "Salada Caesar",
      descricao: "Alface, frango grelhado, croutons, parmesão e molho caesar.",
      preco: 22.0,
      imagem: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='220'%3E%3Crect fill='%2390ee90' width='300' height='220'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='white' text-anchor='middle' dy='.3em'%3E🥗%3C/text%3E%3C/svg%3E"
    },
    {
      id: 6,
      nome: "Sushi Variado (10 peças)",
      descricao: "Combinado de sushi com salmão, peixe branco e makis.",
      preco: 38.0,
      imagem: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='220'%3E%3Crect fill='%23ff6347' width='300' height='220'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='white' text-anchor='middle' dy='.3em'%3E🍣%3C/text%3E%3C/svg%3E"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      e.target.reset();
      setCurrentPage('cardapio');
    }, 2000);
  };

  return (
    <>
      <nav className="navbar">
        <a onClick={() => setCurrentPage('cardapio')}>Cardápio</a>
        <a onClick={() => setCurrentPage('contato')}>Contato</a>
      </nav>

      {currentPage === 'cardapio' && (
        <div className="cardapio-container">
          <h1>🍽️ Nosso Cardápio</h1>
          <div className="pratos-grid">
            {pratos.map(prato => (
              <div key={prato.id} className="prato-card">
                <img src={prato.imagem} alt={prato.nome} />
                <h3>{prato.nome}</h3>
                <p>{prato.descricao}</p>
                <span>R$ {prato.preco.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentPage === 'contato' && (
        <div className="contato-container">
          <h1>📩 Contato</h1>
          {enviado && <p className="sucesso">Mensagem enviada com sucesso!</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu email" required />
            <textarea placeholder="Digite sua mensagem" rows="5" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </>
  );
}

