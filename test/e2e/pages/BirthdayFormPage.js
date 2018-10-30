var BirthdayFormPage = function(){
    var birthdayYear =  element(by.xpath('//*[@id="form"]/div/div/app-dob/div[1]/app-date-input/form/div/mat-form-field[1]/div/div[1]/div[3]'));
    var birtdayMonth = element(by.xpath('//*[@id="form"]/div/div/app-dob/div[1]/app-date-input/form/div/mat-form-field[2]/div/div[1]/div[3]'));
    var birtdayDay =  element(by.xpath('//*[@id="form"]/div/div/app-dob/div[1]/app-date-input/form/div/mat-form-field[3]/div/div[1]/div[3]'));

    this.setBirthDay = function(){
        birthdayYear.click();
        var userBirthdayYear          = element(by.cssContainingText('.mat-option-text', '1997'));
        userBirthdayYear.click();
        birtdayMonth.click();
        var userBirtdayMonth         = element(by.cssContainingText('.mat-option-text', 'February'));
        userBirtdayMonth.click();
        birtdayDay.click();
        var userBirtdayDay         = element(by.cssContainingText('.mat-option-text', '3'));
        userBirtdayDay.click();
    };   
   };
   module.exports = new BirthdayFormPage();