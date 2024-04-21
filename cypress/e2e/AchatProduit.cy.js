describe("Acheter un produit ", () => {
  // Test cases pour l'ajout des produits au panier
  it("Acheter un produit au panier", () => {
    cy.get(
      "#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input"
    ).type("HTC Touch HD");
    cy.get('button[type="submit"]').contains("Search").click({ force: true });
    cy.contains("Search - HTC Touch HD");
    cy.get("#entry_212469 > .row > :nth-child(1)").click();
    // cy.wait(4000);
    // Completez le test d'achat d'un produit
    cy.get("#entry_216843 > .text").click();
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout"
    );
    cy.get("#input-telephone").clear().type("+21697955444");
    cy.get('input[name="payment_address"]').check({ force: true });
    // cy.wait(4000)

    // Cypress.Commands.add('showHubSpot', () => {
    //   cy.get('#shipping-new')
    //       .invoke('attr', 'style', 'display: block')
    //       .should('have.attr', 'style', 'display: block')
    // })

    

    // cy.get("#input-shipping-firstname").type("Sabrine", { force: true });

    // cy.get('#input-shipping-firstname').then(elem => {
    //   elem.val('Sabrine');
    // });
    // cy.get('#input-shipping-firstname').invoke('val', 'sabrine', { force: true })



    cy.get('#input-shipping-firstname').focus().invoke('val', 'sabrine', { force: true })


    cy.get("#input-shipping-lastname").type("Hasni", { force: true });
    cy.get("#input-shipping-company").type("Tunisia", { force: true });
    cy.get("#input-shipping-address-1").type("Amdoun 9030", { force: true });
    cy.get("#input-shipping-address-2").type("Tunis 1200", { force: true });
    cy.get("#input-shipping-city").type("ELIFE", { force: true });
    cy.get("#input-shipping-postcode").type("9000", { force: true });
    cy.get('select[name="shipping[country_id]"]').select('Tunisia', { force: true });
    cy.get('select[name="shipping[zone_id]"]').select("Tunis", { force: true });
    cy.get('input[name="agree"]').check({ force: true });
    cy.get('#button-save').click()
  });

  //Ajoutez autres tests cases pour l'achat des produits

  //  it('Ajouter Produit aux panier ',() => {

  //  });
});
