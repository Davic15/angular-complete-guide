# Angular - The Complete Guide
## Section 17: Using Pipes to Transform Output.

## Introduction & Why Pipes are useful.
    - Transform output to display.
    - Some are build in Angular other can be custom.

## Using Pipes.
    - Default project.
    - A pipe is responsible to transform the output and it goes directly to the template.
    - The original data is untouched.

## Parametrizing Pipes.
    - Some pipes can use parameters.
    - Example the date pipe.
    - Parameters can be separated using :.

## Where to learn more about Pipes.
    - Angular documentation.

## Chaining multiple pipes.
    - We can chain pipes with the symbol | and add our new pipe.
    - Pipes order is important otherwise we will get an error.
    - Transform the date in something that can be parse first.

## Creating a custom pipe.
    - First a new file should be created and implements PipeTransform.
    - We need to add the Pipe decorator with a name, and import in the app.module.ts.
    - We can add now our pipe in the HTML template, using the name we use in the Pipe name.

## Parametrizing a custom pipe.
    - Adding a second argument in the function we can use (in our case), a limited set of characters.
    - To send parameters we need to add : in our template next to our pipe.

## Example: Creating a filter pipe.
    - The same than before, another custom pipe.

## Pure and impure pipes (or: how to fix the filter pipe).
    - Angular doesn't re-run the pipe when our data has changed.
    - Updating arrays or objects doesn't triggerit.
    - We can add pure: false to our pipe, to recalculate the pipe, but the performance decrease.

## Understanding the "async" pipe.
    - The build-in pipe asyn helps us to work with async data.

## Example.
