# playwright-payback

Example of UI test automation using Playwright test framework.

# General Information

I implemented UI tests with the use of POM and Playwright fixtures.

The tests were divided into two locations: for AT and IT location.

The following case was considered positive scenario:

- the happy path for registration a new loyalty card with a random data.

## Selected technology stack

Playwright was selected as a base for the test framework. There are several reasons for it:

- Playwright is the most modern technology for UI and API test automation
- Playwright offers additional tools for recording, debugging, and analyzing tests
- All features of Playwright are free
- Playwright offers a parallel execution by default
- The easiest framework to set up
- Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox
- Playwright offers an API for use in TypeScript, JavaScript, Python, .NET, and Java.
- etc -> https://playwright.dev/

TypeScript was selected as a programming language, because of hands-on experience, and the fact that TypeScript is one of the native languages for Playwright.

Page Object Model is one of the best-known patterns for web app test automation. POM offers a clear structure for test implementation, maintenance, and updating. Using POM, the test framework could be easily scaled.

## Dependencies

Please make sure that you have installed on your machine:

- Git
- Node.js
- Allure.

### Documentation:

- Git: https://git-scm.com/downloads

Installed version:

```sh
% git --version

git version 2.34.1
```

- Node.js: https://nodejs.org

Installed version:

```sh
node --version

v14.18.3
```

- Allure: https://docs.qameta.io/allure-report/#_get_started

Installed version:

```sh
allure --version

2.17.2
```

- Playwright: https://playwright.dev/docs/intro

Installed version:

```sh
npx playwright --version

Version 1.25.0
```

## Get the Code

1. Clone the repo using a link below

```sh
git clone https://github.com/sorokoletovdu/playwright-payback.git
```

2. Navigate to the folder with code and install npm packages using:

```sh
cd ./playwright-payback
```

```sh
npm install
```

3. Install Playwright

```sh
npx playwright install
```

## Run the Tests

Run all tests (headless mode)

```sh
npx playwright test
```

Run the AT tests in headless mode

```sh
npx playwright test registrationNewCardAT.spec.ts
```

Run the AT tests in headed mode

```sh
npx playwright test registrationNewCardAT.spec.ts --headed
```

Run the IT tests in headless mode

```sh
npx playwright test registrationNewCardIT.spec.ts
```

Run the IT tests in headed mode

```sh
npx playwright test registrationNewCardIT.spec.ts --headed
```

## For Allure Report generation execute :

```sh
allure serve
```
