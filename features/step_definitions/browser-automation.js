const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = import('chai');

//require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the Google search page', async function () {
    await driver.get('http://www.google.com');
});

When('I search for {string}', async function (searchTerm) {

});

Then('the page title should start with {string}', {timeout: 60 * 1000}, async function (searchTerm) {

});

AfterAll(async function(){
    await driver.quit();
});