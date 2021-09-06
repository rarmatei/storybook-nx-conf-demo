describe('common-ui-multi-select: CommonUiMultiSelect component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonuimultiselect--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to common-ui-multi-select!');
    });
});
