/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('TAE task', () => {
  it('Goes to skyscanner', () => {
    cy.visit('https://www.skyscanner.pl/')
  })

  it('accepts cookies',{ scrollBehavior: false }, () => {
    cy.get('#cookie-banner-root').within(() => {
        cy.get('#acceptCookieButton')
            .should("exist")
            .pause()
            .trigger("click", { force: true })
    })

    //cy.get('#acceptCookieButton').should("not.be.disabled").trigger("click")
    //cy.get('#acceptCookieButton').click()
  })
//  it('Picks from', { scrollBehavior: false }, () => {
//    //cy.get('form').first().within(() => {
//        cy.get('#fsc-origin-search')
//        .should("exist")
//        .clear()
//        .trigger("click")
//        .type('Polska')
//        .type('{enter}')
//        .should('have.value', 'Polska (PL)')
//  })
//
//  it('Picks to', { scrollBehavior: false }, () => {
//    //cy.get('form').first().within(() => {
//        cy.get('#fsc-origin-search')
//        .should("exist")
//        .clear()
//        .trigger("click")
//        .type('Dubaj')
//        .type('{enter}')
//        .should('have.value', 'Dubaj (wszystkie lotniska)')
//    })


    it('Picks travelers', { scrollBehavior: false }, () => {
      //cy.get('form').first().within(() => {
          cy.get('[name="class-travellers-trigger"]')
              .should("exist")
              .trigger("click")

           cy.get('[title="Zwiększ liczbę osób dorosłych"]')
               .should("exist")
               .should("not.be.disabled")
               .trigger("click")
           cy.get('[title="Zwiększ liczbę dzieci"]')
                .should("exist")
                .should("not.be.disabled")
                .trigger("click")

           cy.get('.BpkLink_bpk-link__MzIwM')
           .should("exist")
           .should("not.be.disabled")
           .trigger("click")
      })

    it('Picks dates', { scrollBehavior: false }, () => {
    cy.get ("#depart-fsc-datepicker-button").trigger("click")
    cy.get('#depart-fsc-datepicker-popover').should("not.be.disabled").should("exist").within(() => {
        cy.get('table').within(() => {
            cy.get ('[type="button", aria-hidden="false"]').then((i) => {
            console.log(i)
            })
    }) })
    })

})