## Chooser helps people make confident choices.

Stuck in a difficult decision? Chooser helps you cut through decision block by helping you break down a decision into smaller increments. Users spend tokens from a limited supply to show how strongly they care about the facets of the decision. 

### Viewing a responsive list of choices

<img src="preview/choiceList.png" width="30%">

### Weighing individual choices

<img src="preview/choice.png" width="30%">

### Guided flow for setting up new choices

<img src="preview/guidedFlow.png" width="30%">

### How to install

Requirements:
- NPM (https://www.npmjs.com/)
- json-server

1. Clone the repo by running `git clone https://github.com/mgjeffries/chooser.git` in the terminal
1. Run `cd chooser` to move into the project repo
1. Run `npm install` to set up the react app
1. If you don't already have json-server, run `npm install json-server`
1. Open a new terminal window, and run `cd src` to navigate to the next directory
1. In this window, run `json-server -p 8088 sampleDatabase.json` to start the database
1. In In the previous terminal window, run `npm start` to start the react app
1. A browser window will open. You can register a user, and create a choice. Happy choosing! 📊 ✅ ❎

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To view the create react app instructions go [here](./create-react-app-instructions.md).
