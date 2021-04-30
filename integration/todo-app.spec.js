
//================================== Disabling Axe Rules with Cypress Axe===================//
/// <reference types="cypress"/>
 
describe('Todo application', () => {
    it('should only include rules with serious and critical impacts', () => {
        cy.visit('http://todomvc.com/examples/react');
        cy.injectAxe();
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
      });
      
      it('should exclude specific accessibility rules', () => {
        cy.visit('http://todomvc.com/examples/react');
        cy.injectAxe();
        cy.checkA11y(null, {
          rules: {
            'color-contrast': { enabled: false },
          },
        });
     });
   });



  
  
//================================== Testing Specific Elements with Cypress Axe===================//
/// <reference types="cypress"/>
 
describe('Todo application', () => {
    it('should log any accessibility failures', () => {
      cy.visit('http://todomvc.com/examples/react');
      cy.injectAxe();
      cy.checkA11y();
    });
    
    it('should exclude specific elements on the page', () => {
      cy.visit('http://todomvc.com/examples/react');
      cy.injectAxe();
      cy.checkA11y({ exclude: ['.learn'] });
    });
   });

/// <reference types="cypress"/>
 
describe('Todo application', () => {
    it('should log any accessibility failures', () => {
      cy.visit('http://todomvc.com/examples/react');
      cy.injectAxe();
      cy.checkA11y();
    });
    
    it('should exclude specific elements on the page', () => {
      cy.visit('http://todomvc.com/examples/react');
      cy.injectAxe();
      cy.checkA11y({ exclude: ['.learn'] });
    });
    it('should only test specific element on the page', () => {
        cy.visit('http://todomvc.com/examples/react');
        cy.injectAxe();
        cy.checkA11y('.learn');
    });
});


/// <reference types="cypress"/>
 
describe('Todo application', () => {
    beforeEach(() => {
      cy.visit('http://todomvc.com/examples/react');
      cy.injectAxe();
    });
    
    it('should log any accessibility failures', () => {
      cy.checkA11y();
    });
    
    it('should exclude specific elements on the page', () => {
      cy.checkA11y({ exclude: ['.learn'] });
    });
    
    it('should only test specific element on the page', () => {
      cy.checkA11y('.learn');
    });
   });
