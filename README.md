# Z9 Kickstart

This is a Brunch-based boilerplate that can be used as a starting point to easily create an app based on [999.css](http://999.surge.sh) and [ZenQRXT library stack](https://gist.github.com/plugnburn/4b2344db3e78ac37f021).

## Getting started

- Install Brunch: `sudo npm install -g brunch`
- Create a new project based on this skeleton: `brunch n MyApp -s plugnburn/z9-kickstart`
- Enter project directory: `cd MyApp`
- Run a debug server: `brunch w --server`

## File structure

- Startup file: `app/startup.js`
- XT templates dir: `app/templates/`
- Actions dir: `app/actions/`
- Custom styles dir: `app/css/`
- HTML entry point: `app/assets/index.html`

## Deployment

When you're ready, just run `brunch b -p` or `npm run build` to make a production build and then copy everything out of `public` directory in your project.

You can also use built-in deployment to [Surge](//surge.sh) hosting:

- fill the `config` section of `package.json` with your desired domain (or `.surge.sh` subdomain) under the `domain` key;
- execute `npm run deploy`.

To unhost your project from Surge, just run `npm run undeploy`.