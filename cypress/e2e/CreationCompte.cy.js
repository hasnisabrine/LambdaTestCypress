
describe('Création de compte', () => {

    // déclarer les variables golbales 
    var firstname;  var lastname; var email;  var tel;  var password

    // Initialiser ces variables avec vos valeurs spécifique
    before(() => {
      firstname = 'med';
      lastname = 'amairi';
      email = 'med@test.com';
      tel = '1234567890';
      password = 'abcd123';
    });

    // Actions à effectuer avant chaque cas de test
    beforeEach(() => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').contains("Continue").click({force:true})
      
    })

    // les cas des tests 
    // it('Creation de nouveau compte avec succée', () => {
    //   cy.get('input[name="firstname"]').type(firstname)
    //   cy.get('input[name="lastname"]').type(lastname)
    //   cy.get('input[name="email"]').type(email)
    //   cy.get('input[name="telephone"]').type(tel)
    //   cy.get('input[name="password"]').type(password)
    //   cy.get('input[name="confirm"]').type(password)
    //   cy.get('input[id="input-newsletter-yes"]').click({force:true})
    //   cy.get('input[name="agree"]').click({force:true})
    //   cy.get('input[value="Continue"]').click({force:true})
    //   cy.contains("Congratulations! Your new account has been successfully created!")
    // });

    //Ajoutez autres test cases pour la partie creation du compte
    before(() => {
      firstname = 'sabrine123';
      lastname = 'hasni#';
      ramndomEmail = `${Date.now()}@gmail.com`;
      tel = 'H97955444';
      password = 'password123';
    });

    it('create account with invalid informations', () => {
      // const randomEmail = Cypress.generateRandomEmail();
      cy.get('input[name="firstname"]').type(firstname)
      cy.get('input[name="lastname"]').type(lastname)
      cy.get('input[name="email"]').type(ramndomEmail)
      cy.get('input[name="telephone"]').type(tel)
      cy.get('input[name="password"]').type(password)
      cy.get('input[name="confirm"]').type(password)
      cy.get('input[id="input-newsletter-yes"]').click({force:true})
      cy.get('input[name="agree"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.get('.page-title').should('not.contain',"Your Account Has Been Created!")
    });
    

  });