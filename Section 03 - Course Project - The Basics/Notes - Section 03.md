# Angular - The Complete Guide
## Section 03: Course Project - The Basics

## Planing the app.
    - Features.
        - Shopping List.
        - Recipe Book.
    - Components.
        - Root.
        - Header.
        - Shopping.
            - Shopping List.
            - Shopping List Edit.
        - Recipe.
            - Recipe List.
            - Recipe Item.
            - Recipe Detail
    - Model
        - Ingredient
        - Recipe

## Creating a new App correctly.
    - Create the new app using --no-strict flag.
    - Install Bootstrap.

## Setting up the application.
    - Create the application.
    - Install bootstrap.
        - Add bootrstrap into angular.js file.
        - In styles and scripts.
    
## Creating the components.
    - Header component
        - Create it and register in app.module.ts file.
    - Recipes component.
    - Shopping list component.

## Using the components.
    - Add the new components into the app component.

## Adding a Navigation Bar.
    - Add a navigation bar using bootstrap classes.

## Creating a "Recipe" model.
    - It is a blueprint for object that we created.
    - We can crate new object base in the blueprint.

## Adding content to the recipes components.
    - We can use our variable recipes with the type Recipes that we defined in our model.

## Outputting a list of recipes with ngFor
    - For this we can use ngFor to iterate for the whole array.
    - Display data with string interpolation.
    - With the src attribute, we can use property binding or string interpolation, both approaches are fine.

## Displaying recipe details.
    - HTML template for the recipe-detail.component.html

## Working on the shoppinglistcomponent.
    - We will define model named ingredients.

## Creating an ingredient model.
    - It will be created in the shared folder.
    - We can define a constructor just in a single line.
        - The access (public, private, etc should be added before the variable name).

## Creating and outputting the shopping list.
    - Define a variable with ingredients as Ingredient, the model we created before.

## Adding a shopping list edit section
    - Adding the HTML code.