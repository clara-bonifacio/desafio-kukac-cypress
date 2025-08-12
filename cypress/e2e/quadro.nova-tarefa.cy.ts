describe("Quadro", () => {
  it("Cria uma nova tarefa na coluna To Do", () => {
    cy.visit("/");
    // 1. Achar a coluna To Do na DOM
    // 1.1 Achar o header que contem o texto To Do
    const todoHeader = cy.get("header").contains("To Do");

    // 1.2 Achar a coluna (parent - pai) desse header
    const colunaTodo = todoHeader.parent().parent();

    // 2. Acessar o botão adicionar tarefa da coluna To Do
    colunaTodo.within(() => {
      cy.contains("Adicionar Tarefa").click();
      cy.get("input").type("Nova tarefa");
      cy.contains("Enviar").click();
      cy.contains("Nova tarefa").should("be.visible");
    });
  });
});
