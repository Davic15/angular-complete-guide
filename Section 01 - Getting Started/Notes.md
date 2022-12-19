# Angular - The Complete Guide

## What is Angular?.
    - Angular is a JavaScript Framework which allows you to create reactive Single-Page-Application (SPAs).
    - A Single HTML file with different pieces of code that react to the user activity.
    - The URL changes, but the page never reloads.
    - We are chaning the currently loaded page, in other words, we are chaning the DOM.

## Angular versioning.
    - AngularJS (Angular 1).
    - Angular 2 (Complete re-write).
    - Angular 3 (It was skipped).
    - Angular 10, 11, 12, etc.
    - New version every 6 months, Small, incremental, backwards-compatible changes).
        - That is the big difference between AngularJS (Angular 1) and Angular 2.
    - We are going to use Angular 2+;
    - From Angular 2, all versions are named Angular 2.

## Project setup and first App.
    - Install NodeJs and Npm.
    - Install @angular/cli
    - It used TypeScript, for that it install more packages.
    - Example:
        - ng new my-app --no-strict
        - cd my-app
        - ng serve

## Editing the first App.
    - Angular allows to write static HTML code with dynamic things.
    - app is a component in our Angular project.
    - The app-root is the index.html, here is where the code goes.
    - The app.component.css is the component style.
    - The app.component.ts is the component definition, it will be converted to normal JavaScript.
        - The selector is the name of the component that we can use an HTML tag.
    - In app.module.ts we can import what we need for the project, Angular needs to now where the things are.
    - The main code to runs is the index.html, and the script shown there will be replaced for our components.

## Course structure.
    - Basics about Angular.
    - Components and Data binding.
    - Directives.
    - Services and Dependency Injection.
    - Routing.
    - Observables.
    - Forms.
    - Pipes.
    - HTTP.
    - Authentication.
    - Optimization and NgModules.
    - Deployment.
    - Animation and Testing.

## How to get the most out of the course?.
    - Practice, practice and practice.
    - Do the assignments.
    - Do the course project.
    - Official documentation and Google.

## What is TypeScript?
    - Superset to JavaScript.
    - More features than Vanilla JavaScript (types, classes, interfaces, etc).
    - Strong type.
    - TypeScript is compiled to JavaScript (CLI is in charge of the compilation).

## Basic project setup using Bootstrap for styling.
    - We will use Bootstrap for the style.
        - npm install --save bootstrap@3.
    - We can modify the angular.json file to add bootstrap to our project.
    - In the developer tools we can see the CSS file imported.
    - In sources (Browser) we can see the styles.css with a reference to Bootstrap.