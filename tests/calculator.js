let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('123');
        homepage.enterSecondNumber('321');
        homepage.clickGo();
        homepage.verifyResult('444')

        browser.sleep(3000)

    });

    it('subtraction test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('123');
        homepage.enterSecondNumber('321');
        homepage.clickGo1();
        homepage.verifyResult('444')

        browser.sleep(4000)

    });

});