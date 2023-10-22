# Section 22 - Angular Modules and Optimizing Angular Apps

## Module Introduction

    - Optimizations to deploy and have a better and faster app.

## What are Modules?
    
    - Modules are ways to building blocks together in Angular.
        - Components, Directives, Services, etc.
    - We need to tell Angular what components we are using.
    - Modules are:  
        - Angular analyze NgModules to understand our application and its features.
        - Angular modules define all building blocks your app uses: Components, Directives, Services.
        - An app requires at least one module (AppModule) but may be split into multipe modules.
        - Core Angular Features are included in Angular modules (e.g. FormsModule) to load them only when needed.
        - You can't use a feature/building block without including in a module.
    - AppModule.
        - Declarations -> Components.
        - Imports -> Other Modules like FormsModule, HttpClientModule, etc.
        - Providers -> All services we want to provide (Inject).
        - Bootstrap -> It starts our app (app-root).
    - AppRoutingModule
        - This is another module and we can import it into app.module.ts in the Import section.
    - A module works alone, it won't communicate with other modules.

## Getting Started with Feature Modules
    
    - Split our code into multiples Modules.
        - It is good to refactor and go back to the code and understand it quick.
    - The router-outlet is not available in our new Module.
        - Every module is standalone, it means what we have in our app.module is not available in the other Modules.

## Splitting Modules Correctly

    - We can import Router module into RecipesModule.
        - We can do it for every module we want to use in other Module.
    - BrowserModule should be added only in the app.module, we can use CommonModule instead of BrowserModule in other Modules.
    - Services should be added only in app.module and only there.

## Adding Routes to Feature Modules

    - forRoot can be used only in the main routing, forChild for other modules routes.
    - Create a new with routes related to the recipes.

## Component Declarations
    
    - We need to add Components even for Routing.
    - If we use components internally, we can omit the exports.

## The ShoppingList Feature Module
    
    - It was the same than RecipesModule.

## Understanding Shared Modules
    
    - Some imports are the same, we can create a share module with the same imports.
    - We need to export all our imports, to have them available in other Modules.
    - We can declare components, directive, etc just once.
        - Multiple declaration of the same thing, it is not allowed.

## Understanding the Core Module
    
    - It is basically there to make the AppModule a bit leaner.
    - If we use Injectable, this step is not needed.

## Adding an Auth Feature Module
    
    - The same than before creating new modules.

## Understanding Lazy Loading
    
    - Load the code related to a specific route.
    - It is faster.

## Implementing Lazy Loading
    
    - If we are not authenticated, there is no need to download recipes components or features. 
    - For the lazy loading we need to do it in the module feature.
        - With routes and an empty path.

## More Lazy Loading
    
    - Change the other modules to use lazy loading.

## Preloading Lazy-Loaded Code
    
    - Split the code in different bundles.
    - This optimization make the first load quick and then when the user brosws the page, we have small bundles.
        - Fast subsequent loads.

## Modules & Services
    
    - We can provide services in AppModule, or in AppComponent (or other components), Eager-loaded Module, Lazy-loaded Module.
        - AppModule.
            - Service available app-wide.
            - Use root injector.        
            - Should be the default.
        - AppComponent.
            - Service available in component-tree.
            - Use component-specific injector.
            - Use if service is only relevant for component tree.
        - Eager-loaded Module.
            - Service available app-wide.
            - Use root injector.
            - Avoid this.
        - Lazy-loaded Module .
            - Service available in loaded module.
            - Use child injector.
            - use if service should be scoped to loaded module.

## Loading Services Differently
    
    -  We can use Service in two ways.
        - With @Injecable and we don't need to add it in the app.module.
        - Without @Injectable but wee need to add it into app.module, inside providers.
        - Both approaches worlk well, the recomendation is to use @Injectable.