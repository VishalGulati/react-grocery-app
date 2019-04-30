This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Its a generic grocery application with few items already included in source code that are dsplayed in storefront. User can add item to cart, delete or increment the item quantity.

The project has been modularised into small independent components characterised as follows:
1. Container - That are connected to REDUX.
2. Components - That dont interact with REDUX nd just display the static content on screen

## Steps to run the app locally

1. Clone the github repository.
2. In the project directory, you can run: `npm install` - This will install all the npm modules your app needs.
3. Run `npm start`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

