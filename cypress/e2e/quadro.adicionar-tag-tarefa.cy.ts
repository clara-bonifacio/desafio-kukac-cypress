describe('Quadro', () => {
    it('Adicionar uma tag a uma tarefa existente', () => {
        cy.visit('/');
        // 1. Achar a coluna To Do na DOM
        // 1.1 Achar o header que contem o texto To Do
        const todoHeaderElem = cy.get('header').contains('To Do')

        // 1.2 Achar a coluna (parent - pai) desse header
        const columnTodoHeader = todoHeaderElem.parent().parent()

        // 2. Clicar em uma tarefa da coluna To Do
        columnTodoHeader.within(() => {
            // 2.1 Selecionar uma tarefa da coluna
            cy.contains('Ajustes fluxo de compra').click()

            // 3. Adicionar a tag dentro do modal
            cy.contains('Adicionar nova Tag').click()
            cy.get('input').type('Nova tag')
            cy.contains('Enviar').click()
            todoHeaderElem.click()
            cy.contains('Nova tag').should('be.visible')
        });


    });
  });