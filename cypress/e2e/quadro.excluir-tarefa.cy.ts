describe("Excluir tarefa no Kanban", () => {
  it("Deve excluir a tarefa pelo nome e confirmar que foi removida", () => {
    cy.visit("/");

    const nomeTarefa = "UX Review";

    // 1. Localiza a tarefa pelo nome, força o click na lixeira pois ela está invisível
    cy.contains(nomeTarefa)
      .parent()
      .parent()
      .within(() => {
        cy.get(".trash").click({ force: true });
      });

    // 2. Valida que a tarefa não está mais no quadro
    cy.contains(nomeTarefa).should("not.exist");
  });
});
