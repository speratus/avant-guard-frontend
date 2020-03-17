# Avant Garde

Avant Garde is an app to help you test you and your friends' knowledge of artists and genres.
When you play, the app will pick a random song from the genre or artist you have selected and display a portion of the song's lyrics. You will then be asked to answer three questions about the song.

Points are awarded based on the obscurity of the song. The more obscure a song is, the more points you get for each correctly answered question.

## Installation

### 1. In order to run Avant Garde, you will need to install `yarn` or `npm`.

I recommend using `yarn`, but `npm` works fine as well.

#### Mac users
If you have [Homebrew](https://brew.sh/) installed, you can simply run
```
brew install npm
```
Or,
```
brew install yarn
```

#### Linux Users
If you have are using Homebrew on linux, see the instructions above.

Otherwise, you should be able to install yarn or npm from your distro's package manager.

#### Windows Users
On Windows, you have several options for installing [yarn](https://yarnpkg.com/getting-started/install) or [npm](https://www.npmjs.com/).

I recommend installing using [Scoop](https://scoop.sh).
To install yarn or npm from scoop, you can run
```
scoop install nodejs
```
Or,
```
scoop install yarn
```

### 2. Getting Avant Garde
If you want to run a local instance of the Avant Garde backend, [go here](#running-the-backend).

Make a directory for Avant Garde and clone the repository into it.
```
git clone https://github.com/speratus/avant-guard-frontend
```

Next install the required depencencies by running 
```
yarn
```
Or,
```
npm install
```

## Running Avant Garde

Once you've got everything installed,
you can start up Avant Garde simply by running
```
yarn start
```
Or,
```
npm start
```

Once you've got an instance running, you're ready to go! Just open up your browser, navigate to [localhost](http://localhost:3000/), and create an account and you're good to go! Select a genre or artist and hit start!

### Running The backend
By default, Avant Garde will query the backend deployed on Heroku, but if you want to run the backend on your local machine, You can find instructions for doing that [here](https://github.com/speratus/avant-guard-backend).

## Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 * [React](https://reactjs.org/)
 * [React Router DOM](https://github.com/ReactTraining/react-router#readme)
 * [Redux](https://redux.js.org/)
 * [React-Redux](https://react-redux.js.org/)
 * [Easy-Redux-Reducers](https://github.com/speratus/easy-redux-reducers)
 * [Semantic-UI-React](https://react.semantic-ui.com/)

