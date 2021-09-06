describe('common-ui-form: CommonUiForm component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonuiform--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to common-ui-form!');
    });
});
