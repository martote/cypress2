/// <reference types="cypress" />

describe('Testes para agenda', () => {
  beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar um novo contato', () => {
      cy.get('.sc-gLDzan.ckeKmo').first().click() // Seleciona o primeiro botão de adicionar
      cy.get('input[type="text"]').type('Alessandra') // Preenche o nome
      cy.get('input[type="email"]').type('alemairis@teste.com') // Preenche o email
      cy.get('input[type="tel"]').type('21 12345678') // Preenche o telefone
      cy.get('button[type="submit"]').click() // Clica para adicionar o contato

      cy.contains('Alessandra').should('be.visible')
      cy.contains('alemairis@teste.com').should('be.visible')
      cy.contains('21 12345678').should('be.visible')
  })

  it('Deve editar um contato', () => {
      cy.get('.sc-gueYoa > .edit').eq(1).click() // Clica no botão de editar do segundo contato

      cy.get('[type="text"]').clear().type('Alessandra')
      cy.get('[type="email"]').clear().type('email@gmail.com')
      cy.get('[type="tel"]').clear().type('123456789')
      cy.get('.alterar').click() // Clica para salvar as alterações

      cy.contains('Alessandra').should('be.visible')
      cy.contains('email@gmail.com').should('be.visible')
      cy.contains('123456789').should('be.visible')
  })

  it('Deve deletar um contato', () => {
      cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()

  })
})

