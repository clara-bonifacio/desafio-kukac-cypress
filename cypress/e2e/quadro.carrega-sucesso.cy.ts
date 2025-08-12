describe("Quadro", () => {
  it("Carrega com sucesso", () => {
    cy.visit("/");
    cy.contains("Quadro Kanban").should("be.visible");
  });
});
