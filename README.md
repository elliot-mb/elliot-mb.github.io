# [elliotmb.dev](https://elliot-mb.github.io/) 
My personal website which is currently in development (unfinished build is published to github pages).\
It will be undergoing continuous changes.

## Repository structure

In this repository, you can find the following top-level directories:

- ``build`` where the deployed app is stored (contents reflect ``gh-pages`` branch).
- ``customTypings`` where I've inserted some typescript "modules" which I've used to allow the loading of images in ReactTS. 
- ``public`` contains some resources and settings.
- ``src`` contains the project; my ``pages``, ``components``, ``data`` etc. Some pages generate directly from this data allowing easy modification of some content pages. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

In the project directory, I can run:

### `npm run deploy -- -m "changes"`

Pushes to my `gh-pages` branch to deploy.