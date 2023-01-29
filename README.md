# Folder Structure and Naming

## Folders
Global components (atoms, molecules, organisms) should be placed in the global folder.

Local components (e.g. header, footer) should have their own local folder to avoid cluttering the global component directory and ensure maintainability and scalability.

Directory Layout:
A typical top-level directory structure is provided for reference.

File Naming Convention:
Use descriptive names, such as 'PersonIndex' and 'PersonView' instead of 'People' and 'Person'.

## Files:
Instead of naming files 'index', use descriptive names such as 'PersonIndex'. This helps to easily distinguish files in code editors, such as VSCode. Otherwise you'll have lots of 'index' tabs open at the top hard to navigate.

Reference: Inspired by Laravel's resource controller actions - https://laravel.com/docs/9.x/controllers#actions-handled-by-resource-controller"


# Structure Overview
General structure of the webapp.

```
/src
├── /config         # Configuration values for the APP
├── /context        # Context API
├── /hooks          # Global hooks
├── /routes         # Routing for the app
├── /services       # Requests and extrernal APIs
├── /store          # Global Redux store
├── /styles         # CSS Styles
├── /types          # TypeScript Models
├── /utils          # Common used functions
├── /views          # Anything to do with UI  
│   ├── atoms       # Used for building blocks i.e button, input   
│   └── molecules   # Made from atoms i.e search bar  
│   └── organisms   # Complex UI components i.e carousel   
│   └── pages       # Respresents a page  
```

## Services

Services are responsible for communicating with external information sources, such as RESTful APIs, GraphQL and so on. 

The structure is divided as follows:

Requests: holds the crucial technology for making fetch requests to specific APIs
[API name]: contains the configuration details for the API and its different routes.

This structure allows for easy integration with multiple APIs - simply add a new folder, create a new config, create specific request, create new APIs functions and it's ready to use.


## Views

React is a View library.

In React, a 'view' refers to any component displayed on the screen, whether it be a button or a home page. Semantic names that we give, such as 'atom' or 'component' for buttons and 'page' for pages, are used for clarity - technically everything is a 'component'.

However, regardless of the name, these components are all considered 'views', something that renders to the screen.


### Organizing Components:
To promote separation of concerns, all 'views' should be kept in a 'views' folder." 

React Documentation is just a guideline and should not be taken serious. 




# Git Workflow
The project has various branches, including:

Main Branch: serves as the authoritative source for the live app
Staging Branch: used for pre-live testing
Dev/feature/es: used for developing new features (can be made more specific)

When working on a feature withing a large team its a good idea to separate it in a new branch and merge it. 

## Methodology when commiting

Workflow when commiting or pushing, written by [Robin  Wieruch](https://www.robinwieruch.de/git-team-workflow/)

- feat: actual feature implementation  
- style: code style and code clean up  
- test: actual test implementation  
- fix: bug fix  
- refactor: refactoring that doesn't affect the behavior of the code  
- chore: no production code changes, but more like configuration and setup  

Commit message could look like the following:  

- feat(users): add authentication  
- fix(logout): clean up cookie  
- test(login): cookie set with access token  
- style(*): fix indentation  
- chore(.gitignore): add .env file  

Similar workflows are being used on large open-source projects such as MDN.


# Storybook

On a larger project with a lot of repeating UI and, it would be a good  idea to use Storybook. However, on some applicatoins like a Website builder, I don't really see a use case for it.

This is a good real life template that Visit Britain uses that can be mimicked: https://www.visitbritain.com/themes/custom/rutherford/storybook/static/index.html?path=/docs/welcome--page







## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
