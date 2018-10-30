exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./e2e/specs/getQuote.spec.js'],
    //C:\Users\Анастасия\AutomationJS-framework\BI-Auto\test\e2e\specs\getQuote.spec.js
    capabilities: {
      browserName: 'chrome'
    },
    //suites: {
    //  homepage: 'tests/e2e/homepage/**/*Spec.js',
    //  search: ['tests/e2e/contact_search/**/*Spec.js',
    //    'tests/e2e/venue_search/**/*Spec.js']
    //},
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },
    /*
    onPrepare: function(){
      var SpecReporter = require('jasmine-spec-reporter');
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }
*/
  }