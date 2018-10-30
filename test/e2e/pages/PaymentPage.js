var PaymentPage = function(){
  var payByButton = element(by.id('mat-radio-11-input'));
  var cardNumber   = element(by.id('mat-input-5'));
  var cardExpireDate   = element(by.id('mat-input-6'));
  var cardCvv   = element(by.id('mat-input-7'));
  var cardHolderName   = element(by.id('mat-input-8'));
  var privacyPolicyCheckbox   = element(by.css('#mat-checkbox-2 > label > div > div.mat-checkbox-frame'));
  var buyNowButton = element(by.css('#payment > div.ng-star-inserted > div > div.payment > a'))

  this.fillPaymentForm = function (userCardNumber, userCardExpireDate, userCardCvv, userCardHolderName) {
      payByButton.click();
      cardNumber.sendKeys(userCardNumber);
      cardExpireDate.sendKeys(userCardExpireDate);
      cardCvv.sendKeys(userCardCvv);
      cardHolderName .sendKeys(userCardHolderName);
      privacyPolicyCheckbox.click();
          };

      this.buyFormSubmit    = function(){
        buyNowButton.click();
      };  
       
   };
   module.exports = new PaymentPage();