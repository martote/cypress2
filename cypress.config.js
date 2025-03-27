// cypress.config.js
module.exports = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',  // Padrão para arquivos de teste
    baseUrl: 'https://agenda-contatos-react.vercel.app/',  // URL base da aplicação
    supportFile: 'cypress/support/e2e.js',  // Arquivo de configuração e comandos globais
    // Outras configurações podem ser adicionadas aqui
  },
};
