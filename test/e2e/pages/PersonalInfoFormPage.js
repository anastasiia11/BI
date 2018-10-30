var PersonalInfoFormPage = function(){
    var firstName = element(by.id('mat-input-1'));
    var lastName = element(by.id('mat-input-2'));
    var email = element(by.id('mat-input-3'));
    var phoneNumber = element(by.id('mat-input-4'));
    var getQuoteButton = element(by.css('#form > div > div > app-lead > form > div.button-container > button'));
  
  
    this.getUrl  = function() {
     browser.get('https://bike-insurance-staging.souqalmal.com/ae-en/form/information');
    }
   this.clearAll = function() {
     firstName.clear();
     lastName.clear();
     email.clear();
     phoneNumber.clear();
       };
  
  this.fillForm = function (userFirstName, userLastName, userEmail, userPhoneNumber) {
    firstName.sendKeys(userFirstName);
    lastName.sendKeys(userLastName);
     email.sendKeys(userEmail);
     phoneNumber.sendKeys(userPhoneNumber);
          };
      this.submitForm    = function(){
        getQuoteButton.click();
      };  
};
module.exports = new PersonalInfoFormPage();