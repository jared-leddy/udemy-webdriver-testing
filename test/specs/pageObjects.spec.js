const InternetPage = require('./../page-objects/internet.page');

describe('Page Object Tests', () => {
    it('should use a page object', () => {
        browser.url('/');

        console.log('Main Heading: ' + InternetPage.mainHeadingText.getText());
        console.log(
            'Secondary Heading: ' + InternetPage.secondaryHeadingText.getText()
        );
    });
});
