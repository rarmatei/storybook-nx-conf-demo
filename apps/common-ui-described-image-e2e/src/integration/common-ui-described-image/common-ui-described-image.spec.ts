describe('common-ui-described-image: CommonUiDescribedImage component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonuidescribedimage--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to common-ui-described-image!');
    });
});
