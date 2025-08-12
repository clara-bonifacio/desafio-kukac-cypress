describe("Quadro", () => {
  it("Excluir uma coluna", () => {
    cy.visit("/");

    //1. Escolher uma coluna para exclusão
    const todoHeader = cy.get("header").contains("To Do").parent();

    //1.1 Encontrar o ícone de lixeira dentro da coluna
    todoHeader.within(() => {
      cy.get(".trash").click();
    });

    //2. Verificar se foi excluído
    todoHeader.should("not.exist");
  });
});
