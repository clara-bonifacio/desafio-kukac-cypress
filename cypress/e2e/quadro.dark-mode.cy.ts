describe('Quadro', () => {

    //1.Trocar primeiro para lightmode
    before(() => {
        cy.visit('/');
        cy.get('.react-switch-bg').click()
    })
    //2.Trocar para darkmode
    it('Ativar modo dark-mode', () => {
        cy.get('.react-switch-bg').click()
        
     //3.Validar se o background ficou escuro 
     const containerColunas = cy.get('.drop-list').parent()
     containerColunas.should('have.css', 'background-color', 'rgb(22, 24, 28)');
     //3.1 Verificar se o background dos cards ficou escuro
     cy.get(':nth-child(1) > .board-cards > :nth-child(1)').should('have.css', 'background-color', 'rgb(22, 24, 28)');
     //3.2 Verificar se o background do botão ficou azul
     cy.get('.react-switch-bg').should('have.css', 'background-color', 'rgb(25, 93, 142)');
    });
});