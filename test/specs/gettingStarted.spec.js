describe('Getting Started', () => {
    it.skip('should open a web page', () => {
        // no config setting required
        // browser.url('https://the-internet.herokuapp.com/');

        // config requires "baseUrl" field to be setup correctly in config file
        browser.url('/jqueryui');
        console.log(browser.getUrl());
        browser.pause(5000);
    });
    it.skip('should read text', () => {
        browser.url('/');
        // #content > ul > li:nth-child(1) > a
        const abTextLink = $('#content > ul > li:nth-child(1) > a');
        const h1Text = $('#content > h1');
        const h2Text = $('#content > h2');

        console.log('A/B Text: ' + abTextLink.getText());
        console.log('H1 Text: ' + h1Text.getText());
        console.log('H2 Text: ' + h2Text.getText());

        browser.pause(5000);
    });
    it.skip('should test check boxes', () => {
        browser.url('/checkboxes');

        const checkboxLink = $('#content > ul > li:nth-child(6) > a');
        checkboxLink.click();

        const checkbox1 = $('#checkboxes > input[type=checkbox]:nth-child(1)');
        const checkbox2 = $('#checkboxes > input[type=checkbox]:nth-child(3)');

        console.log('checkbox1 before: ' + checkbox1.getAttribute('checked'));
        console.log('checkbox2 before: ' + checkbox2.getAttribute('checked'));

        checkbox1.click();
        checkbox2.click();

        console.log('checkbox1 after: ' + checkbox1.getAttribute('checked'));
        console.log('checkbox2 after: ' + checkbox2.getAttribute('checked'));

        browser.pause(5000);
    });

    it.skip('should test text fields', () => {
        browser.url('/');

        const inputLink = $('#content > ul > li:nth-child(27) > a');
        inputLink.click();

        const inputField = $(
            '#content > div > div L> div > input[type=number]'
        );

        inputField.setValue('123');
        inputField.addValue('456');
        console.log('inputField value: ' + inputField.getValue());

        browser.pause(5000);
    });
});
