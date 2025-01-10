# DOC-CUCUMBER-JAVASCRIPT

1. Create an empty repository in Github.
2. Launch VSCode and clone the above repository.
3. Open New Terminal from menu.
4. Verify node installation ``` node -v``` and npm installation ```npm -v```
5. Initialize folder ```npm init --yes```
6. Add cucumber as dev dependency ```npm install --save-dev @cucumber/cucumber```
7. prepare the project structures ``` \featuers``` and ```\step-definitions```
8. add ```.gitignore``` file and add ```/node_modules```
9. create ```\cucumber.json``` and ```{
                                          "default": {
                                              "formatOptions": {
                                                  "snippetInterface": "synchronous"
                                              }
                                          }
                                      }```
10. create sample stepdefintion file and add ```const assert = require('assert');
                                                const { Given, When, Then } = require('@cucumber/cucumber');```
11. change script in package.json into ```cucumber-js```
12. verify installation ```npm test``` and check output for ```0 scenarios and 0 steps```
13. See scenario undefined. write a scenario and run test again ```npm test```, verify reported as undefined ```UUU```
14. See scenario pending. copy step codes in step definitions file and run test again verify as pendding ```P--```
15. See scenario failing. add enough code and run test and expect ```..F```
16. See scenario passing. ``` ...```

## more
17. variables and examples
18. api testing
19. browser automation ````npm install selenium-webdriver```
20. ``` npx cucumber-js```
