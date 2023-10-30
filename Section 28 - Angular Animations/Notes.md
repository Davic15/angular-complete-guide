# Section 28 - Angular Animations

## Making Animations work with Angular 4+

    - With the release of Angular 4, the general syntax of Angular Animations didn't change.
    - However, the animation functions were moved into their own package and you now also need to add a special module to your imports[]  array in the AppModule.
    - Specifically, the following adjustments are required:
    - You probably need to install the new animations package (running the command never hurts): npm install --save @angular/animations
    - Add the BrowserAnimationsModule  to your imports[]  array in AppModule
    - This Module needs to be imported from @angular/platform-browser/animations'  => import { BrowserAnimationsModule } from '@angular/platform-browser/animations'  (in the AppModule!)
    - You then import trigger , state , style  etc from @angular/animations  instead of @angular/core

## Introduction
    
    - Angular allows to use animations.
    - Some CSS transitions are complicated, but Angular allows us to do it different.

## Setting up the Starting Project

    - Installing dependencies.
    
## Animation triggers and state

    - We need to add animations.
    - Two states are required.

## Switching between states

    - Only changing the state.

## Transitions
    
    - We can add transitions from one to another one, and we can animate in miliseconds

## Advanced Transitions

    - We can use <=> to do it in both directions.
    - The wild card is used to point out to any state.

## Transition Phase

    - We can use style between animations.

## The void state.

    - Void is a reserved state name, for cases when an element is not added to the DOM from the begining.

## Using Keyframes for Animations
    
    - Normal KeyFrames than CSS but used in Angular.

## Grouping Transitions
    
    - group method we pass an array or animations to run in a sync way.

## Using Animation Callbacks

    - We can define call backs.

