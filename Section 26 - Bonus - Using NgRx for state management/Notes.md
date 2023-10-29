# Section 26 - Bonus - Using NgRx for state management

## Module Introduction

    - A more complex state management system.
    - Basics: State, Reducers and selectos.
    - Working with NgRx Effects.

## What is NgRx?
    
    - A state management solution.
    - Aims to help with the management of more complex, (app-wide) state.
    - May be used instead of managing complex state in components or services.
    - Data
        - Change over time (example because of button being clicked).
            - Changes should be reflected in UI.
    - In our app we use state, but inside components.

## Understanding NgRx and its building blocks.
    
    - Store (This is where your data is stored and managed).
        - Components can read data from the store (listen to changes).
    - Selector (Component can get globally state).
        - Components are where the data is needed and updates should be reflected.
    - Actions (Standarized message "events" to which reducers can listen.
    - Reducers (Contains state changing logic).
    - Effects (Side-effects that should be triggered for centaing actions (example: send HTTP request).

## Project setup and installing NgRx

    - First install the package ng add @ngrx/store.
        - It will add some extra lines automatically in the app.module.ts.

## Adding a first reducer and store setup

    - If we need data into the store, we need reducers.
    - First we need to create a folder named store.
    - Second we need to create a file named something.reducer.ts
    - We can use the createReducer method, provided by Angular.
        - Initial state is required, could be a variable, array, object, etc.
        - Add reducer into the app.module.ts.

## An Alternative way of creating reducers

    - Another way to create a Reducer is using a function.
        - Both ways are a function under the hood.

## Reading Data from the store

    - We need to inject the store in the constructor in the component we want to use it.
    - By convetion we need the variable$ with $ and it is an onservable.
    - The method store.select(), allows us to read data from the the store.

## Introducing Actions and State Changing Reducers
    
    - Actions (dispatch actions from our component).
    - Action is a value and an identifier of a certain action.
    - Action names are like this [Feature name] Increment.
    - After the action is created we need to go back to the reducer.
        - Inside the reducer we can use on, it gets the action and a function with the state.
    
## Dispatching Actions
    
    - We need to go to the component and write store.dispatch(incrementAction).
    - With this we are triggering the action (counter.action.ts), and it calls counter.reducer.ts.

## Attaching Data to Actions.

    - Create actions can get another argument.
    - props allows us to attach data to the reducer.
    - In the reducer we have a argument called action, and we can access to the value we defined in the counter.action.ts props

## Handling Actions without createReducer

    - The two functions createReducer and createActions are the way, but we can go for other approach.
    - We can ask for the action type ([Counter] Increment) and do what we want with the action.

## An Alternative way of defining actions
    
    - We can define a class to another way to define an Action.
    - It is just an idea, but create reducer and create action, should be used.

## Time to Practice: A second Action

    - Follow the same steps to do the decrement.

## Exploring Selectors
    
    - Select data from the store.
    - Selector is a function that could be store in a function.
    - We can define multiple selectors and modified only here.

## Introducing Effects

    - Side Effect.
    - What's a side effect?
        - Anything that is not directly related to an immediate UI update.
        - HTTP Request, localStorage, Logging to the console.
        - We should avoid side effects in our reducers because the code there is sync, not async code.
        * We cannot log to the console in the reducers.

## Install the Effects Package
    
    - To install it we need to run ng add @ngrx/effects.
    - It updastes the app.module.ts.

## Defining a First Effect

    - All files that work for the store can be place in a single file, but it is a good practice to split in different files.   
    - We can use pipe in the observable and inside pipe we can use ofType (which action we can run code).
        - ofType accepts actions or the type we defined earlier [Counter] Increase.
    - tap operator side effect and don't dispatch any other side effect.
        - When it is done, it does not dispatch another side effect.
    - If we use tap, we should add another part of the code to tell Angular about to don't dispatch anything else.

## The old @Effect Decorator and Registering Effects

    - The old @Effect was added at the top of the function, but in the newest version not anymore.
    - We need to add the Injectable decorator to our Effects.

## Using Store Data in Effect

    - withLatestFrom allows to get the latest value that we are working on.
        - It is placed between ofType and tap.

## Adding a second effect

    - switchMap allows us to switch to a new observable chain.
    - of allows us to convert into an observable.
    - To access our data we can use app.component.ts, because it is the first component to run.

## Summary

    - Basic idea about the store and NgRx.

## Getting Started with Reducers 

    - Working in the recipe app, adding store.

