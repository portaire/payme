
# Structure Overview
General structure of the webapp, and explanation of each main folder.

The actual source files of the project are stored inside the `src` folder.

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
`[API Name]`: contains the configuration details for the API and its different routes.

This structure allows for easy integration with multiple APIs - simply add a new folder, create a new config, create specific request, create new APIs functions and it's ready to use.


## Views

Having a separate "view" directory helps us separate the structure of the app.

React is a "view" library, unlike MVC. 

When creating new components, they don't have a meaning, unless we give it.

For example, a button is a component, a page is a component. Semantic names that we give, such as an 'atom' or an 'component' for a button, and 'page' for pages are used for cliarty, made by developers - technically everything is a 'react component', a 'view'.

Having a separate "view" directory for these components helps maintain a clear separation of concerns and becomes more important as the project grows. Everything the user sees belongs in the "view" directory.

### Components

The approach I've taken here is to use ATOMIC Desing principles. 

It helps with scalability and maintanability of the project with an easy to understand methodology.

You build from small components to large ones. Just like atoms build molecules, and molecules form an organisms. Its the equivalant of `Button`, `Input`, `Select`, `Card` making a molecule or organisms, which if we have a lot of them, they eventually form a template, a page.

Desing by components, not by pages.

Good article: https://atomicdesign.bradfrost.com/chapter-2/

Note: Any CSS styles should go into the same directoy. There is no point having a separate styles/components folder when we can just have the components inside the actuall component folder. It makes things faster and we reduce folders, which is always a good thing :)


## Styles

TailwindCSS structure emphasizes minimal use of styles. 

Configuration values are set in either tailwind.config.js or theming.scss within the base folder. TailwindCSS streamlines styling with its efficient and elegant approach, replacing the need for pure CSS or Scss variables. 

The folder prefixes prioritize order, as some folders require interdependent functionality and must be imported to function properly.

``` 
/styles  
├── /0-vendor       # 3rd party libraries i.e tailwindcss, fonts and so on  
├── /1-helpers      # mixins   
├── /2-base         # global styles, theming etc...  
├── /3-layouts      # global layouts such as: header, footer, nav, sidebar  
├── cheat           # hot fixes - should be cleaned once a while  
├── styles          # imports all above, it gives a nice overlook on all imports, as they do need to follow an order  
 
```


# Folder Structure and Naming

For an easy way of collaborating with other developers have a folder and naming convention that everyone follows on the project to save any confusion and make work go smooth as possible.

This also helps onboard new devs and get up to speed, instead of figuring out how something should be named or if this is the correct plurar word.

## Folders
Global components (atoms, molecules, organisms) should be placed in the global folder.

Local components (e.g. header, footer) should have their own local folder to avoid cluttering the global component directory and ensure maintainability and scalability.

Directory Layout:
A typical top-level directory structure is provided for reference.

File Naming Convention:
Use descriptive names, such as 'PersonIndex' and 'PersonView' instead of 'People' and 'Person'.

## Files
Instead of naming files 'index', use descriptive names such as 'PersonIndex'. This helps to easily distinguish files in code editors, such as VSCode. Otherwise you'll have lots of 'index' tabs open at the top hard to navigate.

Example:
```
/Dog
├── DogIndex - Shows all dogs
├── DogView - Single dog, usually fetched by ID
```


## Reference Link 
Reference: Inspired by Laravel's resource controller actions - https://laravel.com/docs/9.x/controllers#actions-handled-by-resource-controller"

Futher reading:
- https://github.com/adamwathan/laracon2017  
- https://restfulapi.net/resource-naming/  
- https://www.youtube.com/watch?v=MF0jFKvS4SI  


# Git Workflow
The project has various branches, including:

**Main Branch:** serves as the authoritative source for the live app  
**Staging Branch:** used for pre-live testing  
**Dev/feature/es:** used for developing new features (can be made more specific)  

When working on a feature withing a large team its a good idea to separate it in a new branch and merge it. 

## Methodology when commiting

Workflow when commiting or pushing, written by [Robin  Wieruch](https://www.robinwieruch.de/git-team-workflow/)

- **feat**: actual feature implementation  
- **style**: code style and code clean up  
- **test**: actual test implementation  
- **fix**: bug fix  
- **refactor**: refactoring that doesn't affect the behavior of the code  
- **chore**: no production code changes, but more like configuration and setup  

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


# Refactoring

Planing the future of the product, gotta keep it simple. Avoiding over-hiring developers to work on one aspect of the codebase by prematurely optimizing, organizing, or redesigning it.

Refactoring is a natural part of growth as new features are added. 

I follow this rule: "If you can easily change something later, do it now - by the time you've made the decision it could have been coded up. If it will be costly and time-consuming, take a week to consider the best approach."

Eventually, your app may need to be rewritten or have elements updated with specialized technology for improved performance. For example, while YouTube might not be difficult to build, it underwent refactoring into multiple pieces, such as using Python for videos and JavaScript for the website and probably a dozen more tech - instead of usingone tech for everything. It's usually okay for a startup to start small with a tech as its more const effective and the 'best' approach will happen when its needed.


### Links
Good article: https://betterprogramming.pub/avoiding-premature-software-abstractions-8ba2e990930a  
Dan Abramov, Redux creator talking about pre-mature optimisation - https://overreacted.io/goodbye-clean-code/  

## The Tortoise and the Hare

When I used to be a kid, I would watch `The Tortoise and the Hare`.

Hare would always challenge tha Tortoise - the Tortoise is very slow, step by step, while Rabbit jumped 10 steps ahead and then took a nap.

Long story short, Mr. Turtle would always win the races because he was persistent and steady, while Mr Rabbit was overconfident and took naps during the race.

The morale of the story is that slow and steady wins the race. 

That being said, there are times where being fast helps. The Tortose might have had to run to get to the other side of the bridge before the gates close and then he could take a little break and keep going. 



# Installing the project

### `npm install` 

Installs required packages.

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

# URL Links:

Live: https://matrix-payme.vercel.app/   
Development: matrix-payme-77zosxbpm-aurelianspodarec.vercel.app  