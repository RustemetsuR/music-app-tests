const { I } = inject();
// const execSync = require("child_process").execSync;

// Before(() => {
//   execSync("cd ../shop-api && NODE_ENV=test node fixtures.js");
// });

Given('я нахожусь на странице {string}', (page) => {
  I.amOnPage(page);
});

When('я ввожу {string} в поле {string}', (value, fieldName) => {
  I.fillField({id: fieldName}, value);
});

When('я нажимаю на кнопку {string}', (button) => {
  I.click({id: button});
});

When('я нажимаю на текст {string}', (text) => {
  I.click(text, '.test-card');
});

Then('я нахожусь на странице {string}', (page) => {
  I.seeInCurrentUrl(page);
});

Then('я перехожу на страницу {string}', (page) => {
  I.amOnPage(page);
});

Then("я вижу текст {string}", (text) => {
  I.see(text);
});
