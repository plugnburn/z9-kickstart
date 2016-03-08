# Z9 Kickstart

This is a Brunch-based boilerplate that can be used as a starting point to easily create an app based on [999.css](http://999.surge.sh) and [ZenQRXT library stack](https://gist.github.com/plugnburn/4b2344db3e78ac37f021).

## Getting started

- Install Brunch: `npm install -g brunch`
- Create a new project based on this skeleton: `brunch n MyApp -s plugnburn/z9-kickstart`
- Enter project directory: `cd MyApp`
- Run a debug server: `brunch w --server`
- When you're ready, run `brunch b -p` to make a production build and then copy everything out of `public` directory in your project

## File structure

- Startup file: `app/startup.js`
- XT templates dir: `app/templates/`
- Actions dir: `app/actions/`
- Custom styles dir: `app/css/`
- HTML entry point: `app/assets/index.html`