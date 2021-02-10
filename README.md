# Reddit Scraper - client test

This is the graphic front-end of the Reddit Scraper prototype.

Displays the frequency of keyword mentions in comments on [r/all](https://www.reddit.com/r/all/)
as a heat map graphic and works in tandem with [reddit-scraper-prototype](https://github.com/rosealexander/reddit-scraper-prototype) 
and [reddit-scraper-server-test](https://github.com/rosealexander/reddit-scraper-server-test).  

## Installation

Use [npm](https://www.npmjs.com) to install.

```bash
npm install
```

## Usage

You must create .env file in the root folder of this project on your local machine.  
Make sure to set REACT_APP_SERVER_NAME=[the-comment-hunter-server-app-name-on-Heroku] in this .env file.

To start,
```bash
npm start dev
```

## Tools

* [ReactJS](https://reactjs.org) Javascript framework.  
* [D3.js](https://d3js.org) data visualization library.  
* [Node](https://nodejs.org/en/) Javascript interpreter.  
* [Npm](https://www.npmjs.com) Node package manager.  

## License
[MIT](https://choosealicense.com/licenses/mit/)
