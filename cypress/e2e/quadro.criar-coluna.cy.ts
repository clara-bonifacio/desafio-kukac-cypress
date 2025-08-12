describe("Quadro", () => {
  it("Criar uma nova coluna", () => {
    cy.visit("/");

    const adicionarOutraLista = cy.get(".drop-list").siblings();

    adicionarOutraLista.within(() => {
      cy.contains("Adicionar outra lista").click();
      cy.get("input").type("Lista de testes");
      cy.contains("Adicionar Lista").click();
    });

    cy.contains("Lista de testes").should("be.visible");
  });
});
