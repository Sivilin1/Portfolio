import { faker } from '@faker-js/faker';

describe('Sign up', () => {

   it('load page SingUp', () => {
     cy.visit('www.example.com/');
    });
    

     const password = "12345678";
     let inboxId;
     let emailAddress;
     let code;
     const faker = require("faker");
       //const emails = await mailslurp.inboxController.getEmails({ inboxId: "265aac03-2e0c-44aa-a4c0-964094bb2599" });
       it('can generate a new email address and sign up', () => {
       // see commands.js custom commands
       cy.createInbox().then(inbox => {
       // verify a new inbox was created
       assert.isDefined(inbox)
      
    
        //save the inboxId for later checking the emails
        inboxId = inbox.id
        emailAddress = inbox.emailAddress;
      });
  });
     // sign up with inbox email address and the password and fill fields
     it('Fill all fields', () => {
      cy.contains('Sign In').click()
      cy.contains('Sign Up').click()
     cy.get('input[name=username]').type(faker.name.firstName());
     cy.get('input[name=email]').type('emailAddress@mail.ru1');
     cy.get('input[name=password]').type(password);
     cy.get('input[name=password_confirmation]').type(password);
     cy.get('.form-checkbox__label').click({force: true});
     cy.get('.form-btn').click();
     
  });  
 
  it('can receive the confirmation email and extract the code', () => {
    // wait for an email in the inbox
    cy.waitForLatestEmail(inboxId).then(email => {
      // verify we received an email
      assert.isDefined(email);
  
      // verify that email contains the code
      assert.strictEqual(/Verification Code/.test(email.body), true);
  
      // extract the confirmation code (so we can confirm the user)
      code = /([0-9]{4})/.exec(email.body)[1];
    });
  });
    
     it('can receive the confirmation email and extract the code', () => {
        // wait for an email in the inbox
        cy.waitForLatestEmail(inboxId).then(email => {
          // verify we received an email
          assert.isDefined(email);
        
   // verify that email contains the code
   assert.strictEqual(/Verification Code/.test(email.body), true);
   cy.wait(5000)
  // extract the confirmation code (so we can confirm the user)
   code = /([0-9]{4})/.exec(email.code);
   cy.log(code)
     });
   });
  
    it('can enter confirmation code and confirm user', () => {
      assert.isDefined(code);
      cy.get('[name="code0"]').type(code);
    cy.get('.submit-row > .btn').click();
    
  });
}); 