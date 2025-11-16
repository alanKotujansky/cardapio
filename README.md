1. Frontend (Interface do Usuário)

Responsável por exibir o cardápio de forma organizada e interativa.

Desenvolvido em HTML, CSS e JavaScript.

Mostra categorias (por exemplo: lanches, bebidas, sobremesas).

Exibe cada item com nome, descrição, preço e imagem.

Permite navegação simples e amigável para o cliente.

2. Backend (Lógica e Processamento)

Controla a lógica do sistema e se comunica com o banco de dados.

Desenvolvido em Node.js / Python / PHP (você pode ajustar conforme usou).

Recebe as requisições do frontend.

Busca e envia os itens do cardápio, categorias e detalhes.

Contém rotas como:

/cardapio – retorna todos os itens

/categorias – lista categorias

/item/:id – retorna um item específico

3. Banco de Dados

Armazena todas as informações do cardápio.

Tabelas principais:

itens (id, nome, descrição, preço, categoria, imagem)

categorias (id, nome)

Facilita atualizações como adicionar, remover ou editar itens.

4. Testes

Validação para garantir que tudo funcione corretamente.

Teste de carregamento do cardápio.

Teste de funcionamento das rotas.

Verificação do banco de dados.

Teste de integração frontend ↔ backend.

5. Erros Inseridos e Correções

Durante o processo, erros foram inseridos intencionalmente (como rota quebrada, item ausente ou preço incorreto) para simular depuração.

Cada grupo revisou o código do outro.

Erros foram listados, explicados e corrigidos.

6. Documentação e Organização

Inclui explicações, prints e anotações sobre:

Funcionalidade do sistema.

Estrutura de arquivos.

Fluxo de dados.

Melhorias futuras (exemplo: sistema de pedidos, login de administrador).
