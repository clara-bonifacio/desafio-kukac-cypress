# 🐱✨ Testes Automatizados E2E com Cypress + TypeScript

![cute-cat](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)

Este projeto contém **testes automatizados** para validar as funcionalidades de um **quadro Kanban** utilizando **Cypress** com **TypeScript**.

A aplicação testada está disponível em:  
👉 **[Kanban App](https://kanban-dusky-five.vercel.app/)**

---

## 🛠️ Tecnologias utilizadas

- 🌲 **Node.js** – Runtime JavaScript
- 🧪 **Cypress** `^14.5.4` – Testes E2E
- 🔷 **TypeScript** `^5.9.2` – Tipagem estática
- 📦 **ts-node** `^10.9.2` – Execução de TS no Node
- 📝 **@types/node** `^24.2.1` – Tipos para Node.js

---

## 📂 Estrutura de testes

Os testes E2E ficam na pasta **`cypress/e2e`**:

| Arquivo | Descrição |
|---------|-----------|
| `quadro.adicionar-tag-tarefa.cy.ts` | Valida adição de tags em tarefas |
| `quadro.carrega-sucesso.cy.ts` | Verifica se o quadro carrega corretamente |
| `quadro.criar-coluna.cy.ts` | Testa a criação de novas colunas |
| `quadro.dark-mode.cy.ts` | Testa ativação/desativação do modo escuro |
| `quadro.excluir-coluna.cy.ts` | Valida exclusão de colunas |
| `quadro.excluir-tarefa.cy.ts` | Valida exclusão de tarefas |
| `quadro.nova-tarefa.cy.ts` | Testa criação de novas tarefas |

---

## 🚀 Como rodar o projeto

1. **Clone o repositório**
    ```bash
    git clone https://github.com/clara-bonifacio/desafio-kukac-cypress.git
    cd seu-repo
    ```
2. **Instale as dependências**
    ```bash
    npm install
    ```
3. **Abrir Cypress no modo interativo**
    ```bash
    npm run cypress:open
    ```
4. **Rodar os testes no modo headless**
    ```bash
    npm run e2e
    ```

## 🎯 Objetivo dos testes

Esses testes foram desenvolvidos para garantir a **confiabilidade das funcionalidades** principais do Kanban, incluindo:

- Criação, edição e exclusão de **tarefas** 🗒️
- Criação e exclusão de **colunas** 📌
- Gerenciamento de **tags** 🎨
- Validação de **modo escuro** 🌙
- Garantia de **carregamento correto** da aplicação 🚀

---

## 💡 Boas práticas adotadas

- **TypeScript** para segurança e clareza no código.
- Nomenclatura de arquivos consistente (`<funcionalidade>.<cenario>.cy.ts`).
- Escopos limitados com `cy.within()` para evitar falsos positivos.
- Uso de **seletores semânticos** e textos para localizar elementos.

