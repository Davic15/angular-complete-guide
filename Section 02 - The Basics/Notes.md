# Angular - The Complete Guide
## Section 02: The Basics

## How an Angular App gets loaded and started?.
    - To modify the basic layout we can add some HTML code to app.component.html
    - The file srved by the server (localhost:4200) is index.html, and it is our SPA (Single Page Application).
    - <app-root></app-root> is the tgat where our components will be loaded.
    - The folder app is the root of our application.
    - In the app.component.ts, we have our component decorator, inside we have the selector property with the app-root, it is where our component will be loaded.

## How is Angular triggered?.
    - In the index.html file at the end (using developer tools), some bundles are created with scripts, using our code.
    - The main.ts is the first code to be triggered.
    - In the line bootstrapModule(AppModule), it is imported from AppModule (/app/app.module), this is a part of the root component in the folter app (app.module.ts). This is the component we will run first the app-root.

## Components are Important.
    - Reminder: Angular at the end is a JavaScript Frameowkr, changing the DOM at runtime.
    - Components are a key feature in Angular.
    - We can build our application using many components.
    - We have the root component and over this we can add more components.
    - Example: The header, can be a component, the main area could be another component, the sidebar could be also another component, etc.
    - It allows us to split our application in reusable parts.

## Creating a new component.
    - The other components that we could create, won't be loaded into index.html, it will be loaded into app.component.html.
    - Inside src/app we can create our folders with components.
    - Naming convention: name.component.extension.
        - Example: server.component.ts / server.component.css / server.component.html.
    - A component is a TypeScript class.
    - We need to use the component decorator, with an object with all metadata needed by Angular.
        - Example: 
            - selector: new component name.
            - templateUrl: html file.
            - styleUrl: css file.
    - Add the new component into app.module.ts.
        - The app.module.ts bundle all (or some) components into packages.
        - We need to register our new components into app.module.ts file.
    - The selector could be an attribute if you use [app-server], and we need to add it as an attribute of an HTML tag.
        - Example:
            - <div app-server></div>
    - The selector coulbe be selected as CSS class, adding a dot(.) at the begining, .app-server.
        - Example:
            - <div class="app-servers"></div>

## Creating components with the CLI & Nesting Components.
    - Steps:
        - ng generate component componentName
        - ng g c componentName
        - We will get a similar component than app component.
        - The file componentName.component.spec.ts is used for testing purposes.
        - The new component will be registed automatically.

# Working with components templates and component styles.
    - We can use inline templates and/or external templates.
    - The inline templace should go inside the componentName.component.ts
        - Instead of templateUrl, we need to write template and write our HTML code there.
    - It is the same for styles. They could be inline or external CSS styles.
        - Instead of styleUrl, we need to write style and write out CSS code there.
    
## What is Databinding?.

