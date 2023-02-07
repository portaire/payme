# Portaire Frontend Test

## Run app
npm start

## Explanation

### Styles
Although I know there are libraries for creating modals, I thought the best option was to do it manually so you'd see how I could manage. 
About the form, the country dropdown is not styled as it should because I decided to prioritize the API requests. 
Card input is a div with three different inputs inside: card number, MM/YY and CCV.

## Form 
When the user clicks on the main button (screen 1), the state of "showModal" changes to true, and the modal is shown. Once here, Address 1 and 2, state and post code autopopulate from the API. User will have to fill the other inputs manually. Even though some of the inputs are autopopulated, the user will be able to modify them because the change of the value is being saved with the onChange property.

Even though there was just one element in the API, the GET request is getting a random element from the list (In case the list grows).

If the card number is not validated with the Luhn Algorithm, the form will not allow to be sent and the card input will show an error message. The luhnValidation() utility is inside the utils folder
[luhnValidation()](./src/utils/luhnValidation.js).

There are two API requests (GET and POST) that are organized in the services folder. 
[config.services](./src/services/config.services.js).
[data.services](./src/services/data.services.js).


Thank you very much for the oportunity, I really had a fun time working on this challenge!