'use strict';
var birthdayFormPage = require('../pages/birthdayFormPage.js');
var personalInfoFormPage = require('../pages/PersonalInfoFormPage.js');
var elements = require('../dates/elemets.js');
var resultPage = require('../pages/ResultPage.js');
var paymentPage = require('../pages/PaymentPage.js');

describe('Get Bike-Insurance App', function() {
    var resultList = element.all(by.tagName('app-result'));
    beforeEach(function() {
       // browser.get(elements.driverExperienceURL);
             });
      
        it('Verify that User is able to provide insurance info', function() {
            browser.get('https://bike-insurance-staging.souqalmal.com/ae-en/form/UAEExperience');
            elements.driverExperienceLessOneYearBtn.click();
            elements.homelandDriverExperienceMoreOneYearBtn.click();
            elements.above200Btn.click();
         expect(browser.getCurrentUrl()).toEqual('https://bike-insurance-staging.souqalmal.com/ae-en/form/birthdate');
                 
        });
        
    it('Verify that User is able to provide his Birthday info', function(){
 //browser.get('https://bike-insurance-staging.souqalmal.com/ae-en/form/birthdate');
      birthdayFormPage.setBirthDay();
      elements.nationality.click();
      elements.yourNationality.click();
    
    });
    it('Verify that User is able to complete the form with valid values', function() {
        personalInfoFormPage.fillForm('Test', 'Testovych', 'test@gmail.com', 501111111);
        personalInfoFormPage.submitForm();
      expect( browser.getCurrentUrl()).toEqual('https://bike-insurance-staging.souqalmal.com/ae-en/results');
  });
 
      it('Verify that User is able to complete the payment with valid values', function(){
       // resultPage.BuyButton.click();
       browser.get('https://bike-insurance-staging.souqalmal.com/ae-en/payment/SBI-PRWF4B');
        paymentPage.fillPaymentForm(4005550000000001, '05/21', 123, 'Test');
        paymentPage.buyFormSubmit();

       
    });   
     
});