describe('Agenda de Contatos - Testes Funcionais', () => {
  beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  const contato = {
      nome: 'Teste Cypress',
      nomeEditado: 'Teste Cypress Editado',
      email: 'teste@cypress.com',
      telefone: '11999999999'
  };

  it('Deve adicionar, editar e excluir um contato', () => {
      // Adicionar contato
      cy.get('[data-testid="add-contact"]').click();
      cy.get('[data-testid="contact-name"]').type(contato.nome);
      cy.get('[data-testid="contact-email"]').type(contato.email);
      cy.get('[data-testid="contact-phone"]').type(contato.telefone);
      cy.get('[data-testid="save-contact"]').click();
      cy.contains(contato.nome).should('be.visible');

      // Editar contato
      cy.contains(contato.nome).parent().find('[data-testid="edit-contact"]').click();
      cy.get('[data-testid="contact-name"]').clear().type(contato.nomeEditado);
      cy.get('[data-testid="save-contact"]').click();
      cy.contains(contato.nomeEditado).should('be.visible');

      // Excluir contato
      cy.contains(contato.nomeEditado).parent().find('[data-testid="delete-contact"]').click();
      cy.contains(contato.nomeEditado).should('not.exist');
  });
});
