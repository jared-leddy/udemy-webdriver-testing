class InternetPage {
    get mainHeadingText() {
        return $('#content > h1');
    }
    get secondaryHeadingText() {
        return $('#content > h2');
    }
}

module.exports = new InternetPage();
