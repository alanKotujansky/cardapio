import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App.jsx";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  const html = renderToString(<App />);
  
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cardápio</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
            color: #e2e8f0;
            min-height: 100vh;
          }

          .navbar {
            display: flex;
            justify-content: center;
            gap: 40px;
            background: linear-gradient(90deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
            padding: 20px 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid #334155;
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .navbar a {
            color: #e2e8f0;
            text-decoration: none;
            font-weight: 700;
            padding: 12px 28px;
            border-radius: 10px;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%);
            border: 1px solid transparent;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 1em;
            cursor: pointer;
          }

          .navbar a:hover {
            background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3);
          }

          .cardapio-container {
            text-align: center;
            padding: 60px 30px;
            min-height: 100vh;
          }

          .cardapio-container h1 {
            font-size: 3.5em;
            font-weight: 800;
            background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 15px;
            letter-spacing: -2px;
          }

          .pratos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-top: 50px;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }

          .prato-card {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border: 1px solid #334155;
            border-radius: 16px;
            padding: 0;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);
            overflow: hidden;
          }

          .prato-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
            border-color: #06b6d4;
          }

          .prato-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            filter: brightness(0.9);
            transition: filter 0.3s ease;
          }

          .prato-card:hover img {
            filter: brightness(1.1) saturate(1.2);
          }

          .prato-card h3 {
            margin: 20px 15px 8px;
            font-size: 1.5em;
            font-weight: 700;
            color: #f1f5f9;
          }

          .prato-card p {
            margin: 0 15px 15px;
            opacity: 0.8;
            line-height: 1.6;
            color: #cbd5e1;
            font-size: 0.95em;
          }

          .prato-card span {
            font-weight: 800;
            font-size: 1.6em;
            background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: block;
            margin: 0 15px 20px;
          }

          .contato-container {
            max-width: 600px;
            margin: 80px auto;
            padding: 50px;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border-radius: 20px;
            border: 1px solid #334155;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          }

          .contato-container h1 {
            text-align: center;
            margin-bottom: 40px;
            font-size: 2.8em;
            background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 800;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          input, textarea {
            padding: 16px;
            border-radius: 12px;
            border: 1px solid #334155;
            background: rgba(15, 23, 42, 0.8);
            color: #f1f5f9;
            font-size: 1em;
            font-family: inherit;
            transition: all 0.3s ease;
          }

          input:focus, textarea:focus {
            outline: none;
            border-color: #06b6d4;
            background: rgba(15, 23, 42, 0.95);
          }

          input::placeholder, textarea::placeholder {
            color: #64748b;
          }

          button {
            background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
            color: white;
            border: none;
            padding: 16px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            font-size: 1.1em;
            font-weight: 700;
            box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          button:hover {
            background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(6, 182, 212, 0.4);
          }

          .sucesso {
            color: #10b981;
            font-weight: 700;
            margin-bottom: 20px;
            padding: 16px;
            background: rgba(16, 185, 129, 0.1);
            border-radius: 10px;
            border: 1px solid rgba(16, 185, 129, 0.3);
          }
        </style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor React rodando em http://localhost:${PORT}`);
});
