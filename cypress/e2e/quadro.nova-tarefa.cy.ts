describe('Quadro', () => {
    it('Cria uma nova tarefa na coluna To Do', () => {
        cy.visit('/');
        // 1. Achar a coluna To Do na DOM
        // 1.1 Achar o header que contem o texto To Do
        const todoHeaderElem = cy.get('header').contains('To Do')

        // 1.2 Achar a coluna (parent - pai) desse header
        const columnTodoHeader = todoHeaderElem.parent().parent()

        // 2. Acessar o botão adicionar tarefa da coluna To Do
        columnTodoHeader.within(() => {
            cy.contains('Adicionar Tarefa').click()
            cy.get('input').type('Nova tarefa')
            cy.contains('Enviar').click()
            cy.contains('Nova tarefa').should('be.visible')
        });
    });
  });