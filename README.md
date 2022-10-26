## Global_Teams_test_task
Project was created as a test for vacation on position QA automation

Requerements:
1. Take cypress.io as automation tool
1. Setup a test suite which will:
1. Go to https ://demo.vercel.store
1. Go to New Arrivals -> ACME Cup
1. Add ACME Cup to the Cart
1. Change it quantity to 5 items
1. Verify that total price is correct (should be cup price * 25)
1. Close cart menu
1. Go to Featured → Quarter Zip
1. Select M Size and add to cart
1. Verify that Both articles are present in the cart
1. Verify that Quarter Zip is exactly M size
1. Verify that total price in cart is correct
1. Proceed to checkout
1. Fill form with random values
1. Proceed to checkout
1. Select second payment method (USPS Priority Mail International)
1. Click Continue to payment
1. Verify presence of text: This store can’t accept payments right now.

## INFO
Project currently support only Chrome browser for running tests

## Setup
There is a prereqs for running the e2e tests locally:
 - the Node.js 12 or 14 and above should be installed
 - Chrome browser should be installed

# Installing the project
Clone repo
```bash
git clone https://github.com/OlekLiakh/Global_Teams_test_task
```
Open folder Global_Teams_test_task
```bash
cd Global_Teams_test_task
```
You will need to call command to install the project before first run
```bash
npm install
```
# Running the project
Command for running the project
```bash
npm run cypress:open
```
1. The Cypress window should open
1. Click on 'E2E testing" tab
1. Choose "Chrome" as browser for running test case
1. Click Start E2E Testing is Chrome
1. Click on globalTeamsTest.cy.js file
