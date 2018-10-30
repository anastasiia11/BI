var elements = function(){
 this.driverExperienceLessOneYearBtn = element(by.css('#mat-radio-2 > label > div.mat-radio-label-content'));
 this.driverExperienceMoreOneYearBtn = element(by.xpath('//*[@id="mat-radio-96"]'));
 this.driverExperienceNextBtn = element(by.xpath('//*[@id="form"]/div/div/app-uaeexperience/div/button'));

 this.homelandDriverExperienceLessOneYearBtn = element(by.css('#mat-radio-5 > label > div.mat-radio-label-content'));
 this.homelandDriverExperienceMoreOneYearBtn = element(by.css('#mat-radio-6 > label > div.mat-radio-label-content'));
 this.homelandDriverExperienceNextBtn = element(by.xpath('//*[@id="form"]/div/div/app-homeland-experience/div/button[2]'));

 this.upTo200Btn = element(by.xpath('#mat-radio-8 > label > div.mat-radio-label-content'));
 this.above200Btn = element(by.css('#mat-radio-9 > label > div.mat-radio-label-content'));

 this.driverExperienceURL = 'https://bike-insurance-staging.souqalmal.com/ae-en/form/UAEExperience';
 this.homelandDriverExperienceURL = 'https://bike-insurance-staging.souqalmal.com/ae-en/form/homelandExperience';
 this.engineCapacityUrl = 'https://bike-insurance-staging.souqalmal.com/ae-en/form/engineCapacity';
 this.birtdayUrl = 'https://bike-insurance-staging.souqalmal.com/ae-en/form/birthdate';

 this. nationality =  element(by.xpath('//*[@id="form"]/div/div/app-nationality/form/div/mat-form-field/div/div[1]/div[3]'));
 this.yourNationality =  element(by.cssContainingText('.mat-option-text', 'Andorra'));
    
};
module.exports = new elements();