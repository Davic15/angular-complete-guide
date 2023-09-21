# Angular - The Complete Guide

## Section 02: The Basics

## How an Angular App gets loaded and started?.

    - To modify the basic layout we can add some HTML code to app.component.html
    - The file served by the server (localhost:4200) is index.html, and it is our SPA (Single Page Application).
    - <app-root></app-root> is the target where our components will be loaded.
    - The folder app is the root of our application.
    - In the app.component.ts, we have our component decorator, inside we have the selector property with the app-root, it is where our component will be loaded.
    - In the index.html file at the end (using developer tools), some bundles are created with scripts, using our code.
    - The main.ts is the first code to be triggered.
    - In the line bootstrapModule(AppModule), it is imported from AppModule (/app/app.module), this is a part of the root component in the folter app (app.module.ts). This is the component we will run first the app-root.

## Components are Important.

    - Reminder: Angular at the end is a JavaScript Framework, changing the DOM at runtime.
    - Components are a key feature in Angular.
    - We can build our application using many components.
    - We have the root component and over this we can add more components.
    - Example: The header, can be a component, the main area could be another component, the sidebar could be also another component, etc.
    - It allows us to split our application in reusable parts.

## Creating a new component and Understanding the role of the AppModule and component declaration.

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

# Fully understading the component selector.

    - The selector could be an attribute if you use [app-server], and we need to add it as an attribute of an HTML tag.
        - Example:
            - <div app-server></div>
    - The selector coulbe be selected as CSS class, adding a dot(.) at the begining, .app-server.
        - Example:
            - <div class="app-servers"></div>
    - In declaration we add the components.
    - In imports we add the functionalities we want to use.

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

    - Databinding = Communication.
    - TypeScript code -> Output Code -> Template HTML.
    - Output data:
        - String Interpolation {{ data }}.
        - Property Binding ([property] = "data").
    - React to (user) events:
        - Event Binding ((event) = "expression").
    - Combination of both: Two-way-binding ([ngModel] = "data").

## String Interpolation.

    - It goes in the HTML code {{ myVariable}}.
    - But the variable is defined in the app.component.ts.
    - We can call methods too that returns a string (functions).

## Property Binding.

    - Some properties we can handle with Angular.
    - For Example the disabled attribute we can handle it with property binding.
        - [disabled]="myVariable".
        - The myVariable should be an expresion that give us a boolean as result.
    - It will update dinamically.

## Property Binding vs String Interpolation.

    - Property binding can be cast to string (show true or false on the browswer).
    - If we want to print some data to the screen we should use STRING INTERPOLATION.
    - If we want to change some property we can use PROPERTY BINDING.
    - Don't mix them in a bad way.

## Event Binding.

    - To use some events we need to use event binding.
    - The name of the event goes in between of ().
    - Example:
        - (click)="codeToBeExecutedOrMethod"

## Passing and using data with event binding.

    - When we can call a method we can pass some data, with the $event.
    - $event gives us access to the event data.
    - FormsModule is required for two-way-binding.
        - ngModel directive allows to do two-way-binding.

## Two-Way-Binding.

    - We can use two way binding with ngModel.
    - We can update data and display data at the same time.
        - It will trigger in the input event and update the value of the variable automatically.
        - Also update the value if this is provided (pre-populated).
    - Angular provides ngModel.

## Understanding Directives.

    - Directives are instructions in the DOM (components are a kind of directive).
        - Angular add the content of this component in this selector.
        - Components are components with templates.
    - We can use the directive as an attribute.
        <p appTurnGreen>Hello</p>
    - The directives use the Directive key words, and their specific selector.

## Using ngIf to Output Data Conditionally.

    - It works like an If statement.
    - It is call ngIf Directive.
    - It is used as an attribute selector.
    - *ngIf the * is a structural director (add it or not).
    - It evaluates a boolean expression.

## Enhancing ngIf with an Else Condition.

    - We need to use a local reference.
    - Also we need to use ng-template (this is a space in the DOM).

## Styling elements dynamically with ngStyle.

    - ngIf is an structural directive.
    - It is better if we use as a property binding.
    - Attributes directives don't add or remove elements, they only change the element they were placed on.
    - The ngStyle directive gets an object with key: value pairs.
        - Style property: value.
    - The ngStyle accepts style properties like CSS using '', example 'background-color', or like JavaScript example backgroundColor.

## Applying CSS classes dynamically with ngClass.

    - The ngClass allows us to add or delete classes dynamically.
    - We should use it as a property binding.
    - Example:
        - [ngClass]="{className: condition}"
        - [ngClass]="{online: serverStatus === 'online'}"

## Outputting lists with ngFor

    - The ngFor directive we can iterate an array of data.
    - The ngFor is an structural directive.
    - Example
        - *ngFor="let localVariable of arrayVariable"
