describe('Testes de Funcionalidades da Agenda de Contatos', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app/';
  
    beforeEach(() => {
      cy.visit(baseUrl); // Visita a aplicação antes de cada teste
    });
  
    it('Deve permitir incluir um novo contato', () => {
      // Preenchendo o formulário de inclusão
    cy.get('input[name="nome"]').type('João Silva');
    cy.get('input[name="telefone"]').type('11987654321');
    cy.get('input[name="email"]').type('joao.silva@teste.com');

      // Submetendo o formulário
    cy.get('button[type="submit"]').click();
  
      // Verificando se o contato foi adicionado na lista
    cy.contains('João Silva').should('be.visible');
    cy.contains('11987654321').should('be.visible');
    cy.contains('joao.silva@teste.com').should('be.visible');
    });

    it('Deve permitir alterar um contato existente', () => {
      // Buscando um contato existente e clicando no botão de editar
    cy.contains('João Silva').parent().find('button.edit').click();

      // Alterando as informações do contato
    cy.get('input[name="nome"]').clear().type('João Silva Alterado');
    cy.get('input[name="telefone"]').clear().type('11987654322');
    cy.get('input[name="email"]').clear().type('joao.silva.alterado@teste.com');

      // Submetendo o formulário de edição
    cy.get('button[type="submit"]').click();

    // Verificando se as alterações foram feitas com sucesso
    cy.contains('João Silva Alterado').should('be.visible');
    cy.contains('11987654322').should('be.visible');
    cy.contains('joao.silva.alterado@teste.com').should('be.visible');
    });

    it('Deve permitir remover um contato', () => {
      // Buscando o contato e clicando no botão de remover
    cy.contains('João Silva Alterado').parent().find('button.delete').click();

      // Confirmando a remoção
    cy.contains('João Silva Alterado').should('not.exist');
    cy.contains('11987654322').should('not.exist');
    cy.contains('joao.silva.alterado@teste.com').should('not.exist');
    });
});