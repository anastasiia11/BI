var PersonalInfoFormPage = function(){
    this.backToFormButton = element(by.css('#results > div.title > a > span'));
   // var resultList = element.all(by.css('.results-container app-result'));
   //expect(resultList.count()).toBe(5);

  this.BuyButton = element(by.cssContainingText('.mat-button-wrapper',  'Buy Now'));

    
};
module.exports = new PersonalInfoFormPage();