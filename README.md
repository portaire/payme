# Payme App

## Prerequisites

- Node v 16.x.x

## Local setup

To install the app locally, please clone this repo:

```bash
git clone git@github.com:kstoklosa/payme.git
```

In the project directory copy environmental variables:

```bash
cp .env.sample .env.local
```

Install dependencies:

```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

```bash
yarn start
```

to start the app in development mode. It is accessible under `http://localhost:3000` by default.

```bash
npx hygen component new --name component-name
```

to create template for the component inside the `src/components` directory.

## Project decisions & improvements

## Decisions

- ### Designs mismatch
  Unfortunately, the free version of `PP Object Sans` font contains only two font-weights:
  - Regular - used along this project,
  - Heavy - available in the project, but since it differs from the required font-weight (500 vs 700), I've decided to not use it for now inside my components
    Additionally I've decided to adjust zip code label & placeholder to other components (on the designs label and placeholder have an additional spacing and I wasn't sure if that was desired), but this can be easily change if needed.
- ### Not sending card details to test server

  To reduce possibility of sending sensitive information directly from a form to a test server, I decided to validate card details on the front end part, but to not send that data along with other customer details. Additionally, there was no information on how to send those card details (provided API endpoint has no validation and it returns 200 regardless of the data format -> tested with Postman due to CORS policy).

- ### Using css modules

  I've decided to use bare CSS instead of CSS preprocessor such as Sass or a CSS toolkit for component-oriented styling. This decision was made due to time limitations and the small amount of components used in the project. Keeping it simple has allowed me to move quickly and focus on other areas of development - such as accessibility.

- ### Form validation

  I've decided to use native form methods to look for missing data inside the form. In the future this could be replaced with a react context in which we could store some useful form data - touched fields, fields errors, submission errors etc.

- ### Using react-select component
  Creating fully-accessible select component from scratch takes time. That's why I've decided to use `react-select` since it gives us most of the features by default (select list navigation with arrows and/or tab, proper aria labels). Unfortunately the easiest way to style that component was resetting default styles and create a \*.css file with classes names inherited from the library.

## Further Improvements

- creating loading indicators,
- handling error state with proper description
