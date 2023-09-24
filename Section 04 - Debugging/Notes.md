# Angular - The Complete Guide

## Section 04: Debugging

## Understanding Angular Error Messages.

    - We will see the tools we can use to debug our applications.
    - In the developer tools we can see the error in the console tab.
        - Some pieces of information are displayed.
        - In what component is the error.
        - The line were the error ocurred.
        - What causes the error.

## Debugging code in the browser using sourcemaps.

    - Sometimes we don't get an error message.
        - We get a logical errors (bad implementations).
    - In Google Chrome, we can go to sources and see the main.bundle.js
        - We can set a break point and debug.
        - It uses sourcemaps, they are an addition to CLI, that allow the browser to translate our JavaScript code to TypeScript, in development only.
    - We can open the TypeScript file directly in Sources.
        - In the webpack option we can to the dot ( . ) folder and there is our code.
