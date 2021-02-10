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

* Setup the [reddit-scraper-prototype](https://github.com/rosealexander/reddit-scraper-prototype).
* Setup the [reddit-scraper-server-test](https://github.com/rosealexander/reddit-scraper-server-test).
* Make sure both of these applications are running on Heroku.
* Fork this repo and run npm install.
* Set process.env.REACT_APP_SERVER_NAME to be your server test application name taht is running on Heroku.
* To start, npm run dev.

## Tools

* [ReactJS](https://reactjs.org) Javascript framework.  
* [D3.js](https://d3js.org) data visualization library.  
* [Node](https://nodejs.org/en/) Javascript interpreter.  
* [Npm](https://www.npmjs.com) Node package manager.  

## License
[MIT](https://choosealicense.com/licenses/mit/)
