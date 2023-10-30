# Section 31 - Angular as a Platform and closer look at the CLI

## Module Introduction

    - The CLI helps to create web applications, and it contains some tools to build, publish and manage our Angular projects.
    - Understand Angular Project and Config.
    - Creater and Manage Project.
    - Sechamtics and Builders.
    - Projects, Apps and Libraries.
    - Deployment, Browser, etc.

## A closer loot at "ng new"

    - We can use ng new without a name and we can get some information to create the new project.
    - The ng new --help gives us help.
        - We have some flags to work with.

## IDE and Project Setup
    
    - Visual Studio Code with some extensions.

## Understanding the config file

    - .editorconfig
        - Settings for the IDE.
    - .gitignore
        - To work with Git, ignore files or folders.
    - package-lock.json
        - It a list of pacakages and the version.
    - package.json
        - Scripts and some dependecies for our appplication.
        - We can use it with npm install.
        - It creates too the package-lock.json with the version and packages.
    - tsconfig.json
        - Configuration file of TypeScript.
        - The other files are related to compilation time.

## Important CLI Commands
    
    - ng --help
        - To get help.
    - ng serve
        - Similar to npm start, it runs our application.
    - ng serve --help
        - Give us information or help about ng serve.
        - There are some flags we can add.
    - ng generate --help
        - It generates things in our applications.
        - Like Components, Class, Guards, etc.
    - ng generate component --help
        - It generates component and show the information about it.
        - It has some extra flags.
    - ng lint
        - It uses the tslint file, to highlight some lines of code.
    - ng build
        - Build the app for production and create a dist file.

## The "angular.json" file - a closer look

    - It is generates automatically when we create a new Angular app.
    - It provides information about our project, and some flags (we can add in the CLI), we can add manually here.
    - In projectType we can define library or application (application by default).
    - The sourceRoot is the folder where our code lives.
    - Some builders are there to build our app for production.
        - It has many options, we can modify or not.
    - The assets folder lets us to save files.
    - The styles we have many styles to add, like bootstrap, etc.
    - The script we can add them here too.
    - We can configure the environment, development and production.

## Angular Schematics - An Introduction
    
    - Schematics are blueprints for different things.
    - ng generate -> Create nre building blocks (components).
    - ng add -> Add libraries and capabilities to a project.

## The "ng add" command
    
    - Example Angular Material.
        - ng add @angular/material.
    - This files contains some configuration files.
    - It install packages using npm.
    - In some cases we can chose different version and use it.
    - The ng add, also update files for us.

## Using custom "ng generate" Schematics
    
    - It helps us to create new things.
    - ng generate @angular/material:nav main
        - It generates a new component using a blueprint.
    - Some thrid party packages allow us to work in that way.

## Smooth updating of project with "ng update"

    - Updates our application.
    - It gives us different ways to update our application.

## Simplified Deployment with "ng deploy"

    - Builders, build the applications for different environments.
        - ng build, nt test, ng lint -> perform certain build steps.
        - ng deploy -> Perform certain deployment steps.
            - It deploys directly to a server.
        - There are some packages to work with different servers.
        - After some configuration with ng deploy it can be deploy to the server.
    
## Understanding "Differential Loading"
    
    -  Browserslist.
        - This file is not present here.
    - Angular App.
        - Hosting provider
            - User A: Modern Browser.
                - Needs not/less polyfills, smaller bundle required.
            - User B: Legacy Browser.
                - Need all/more polyfills, bigger bundle required.
        - Differential Loading (Built in Angular).
    - When we build the app, we have some JS files for different targets, and in the index.html we have a script that targets the correct version.

## Managing Multiple Projects in One Folder

    - We can generate applications inside our project.
    - And we can change into the configuration file.

## Angular Libraries - An Introduction

    - ng generate library.
    - A library has Angular code, but it means to run in different web applications (example Angular Material).

## Wrap up.