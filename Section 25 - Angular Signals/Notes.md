# Section 25 - Angular Signals

## Module Introduction

    - Signals are still under development.
    - Maybe the syntax change in the future.

## Signals: What and why?

    - Signals vs Classic Change Detection.
        - Classic change detection. 
            - Zone based Change Detection.
            - Changes are detected automatically.
            - UI is updated automatically.
            * Performance could be better and bundle size is increased.
        - Signals.
            - Added as Developer preview in Angular v16.
            - No automatic change detection, you tell Angular when data changes.
            - Angular updates only the parts of the UI where the data ('signals') is ised.
            * But full control, better performance and smaller bundle.

## Create a new Signal

    - We can create signals with the signal function, imported from the angular/core.
        - And we can pass the initial value.
        * Similar to useState ???.

## Updating a Signal Value

    - We have some functions to manipulate our signals.
        = update will update the value.

## Reading and outputting a signal value

    - When we use the signal way, we need to display data in other way.
    - In our UI we need to upodate it, we need to use them as a function.

## Signal updating: set(), update() and mutate()

    - Update signal, we use an arrow function, get the old value and update it
    - Set signal, set a value
    - Mutate signal, allows us to update a value.

## Important: Signals are not finished yet!.

    - RFC (Request for comments) signals.

## Signals: What's to Come?

    - Signals are not fully implemented yet.

## Computed values and effects

    - Computed the values that depends of other signals.
    - Effect can be implemented inside constructor or ngInit, this allows to read values that use signals.

## Summary
    
    - Signals.
