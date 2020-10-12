# Microfrontends Angular 11

This project shows an example of using Webpack 5 Module Federation with Angular v11-next.5

## Usage

To enable use of Webpack 5 with the angular cli you **must** use **yarn** as your package manager, it allows you to override the webpack dependencies for the CLI. 
The package.json contains the following section to override webpack to use version 5 instead of 4:

```json
  "resolutions": {
    "webpack": "5.0.0"
  },
```

## Running the demo
- Install packages: ``yarn install``
- Start the mdmf-shell: ``ng serve mdmf-shell``
- Start the Microfrontend: ``ng serve mdmf-profile``
- Open the shell http://localhost:4200
- Click the profile navigation link to load the remote Microfrontend


## Project Structure

### Shell
The shell project located in: `projects/mdmf-shell` folder, its contains the shell application which is used to load remote Microfrontends using dynamic routing constructed from the Microfrontend array.  The list of Microfrontends can be loaded from a config if required, but for the example it is just an hardcoded array.  

### Profile Microfrontend
The profile project located in: `projects/mdmf-profile` contains a profile module with some child routes configured. The profile module is exposed as a remote module within the Module Federation config:

```js
plugins: [
    new ModuleFederationPlugin({
      name: "profile",
      library: { type: "var", name: "profile" },
      filename: "remoteEntry.js",
      exposes: {
        ProfileModule: "./projects/mdmf-profile/src/app/profile/profile.module.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ]
```

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
