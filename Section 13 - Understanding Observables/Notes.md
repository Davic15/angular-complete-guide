# Angular - The Complete Guide
## Section 13: Understanding Observables.

## Module Introduction
### What is an observable?
    - It is a source of data, or various data sources.
        - Example: User input, Events, Http Requests, Triggered in Code, etc.
### What is an observer?
    - It is our code.
    - There are three ways of handling data packages.
        - Handla Data.
        - Handle Error.
        - Handle Completion.
    - We write the code which gets executed.
    - We can wait or not the total execution of an observable.
    - It is another way to write promises or async code.
    - An observable can send us data, error, or a completed task.

## Analyzing Angular Observables.
    - Observables are contracts to which subscribe to be informed about changes in data.
    - Observables are a stream of data.
    - params is the observable in the example.

## Getting closer to the core of observables.
    - They are not part of Angular or TypeScript.
    - We are using interval (observable).
    - Observables keep emiting values even if we are not using it.
    - We need to unsubscribe to avoid memory leaking and run out of resources.
        - It is a good way to do it in onDestroy.
    - Observables provided by Angular, are handle by Angular and Angular unsubscribe them.

## Building a custom observable.
    - We need to use Observable.create method.
    - An observer is needed and it will be listening for any change.
    - After our observable is created we should subscribe to it.

## Errors & Completion.
    - When an observable thrown an error, it stops automatically.
    - We can send a second argument to our subscribe method.
        - This is a method to handle errors.
    - Completion in an observable is something normal.
        - It is done, no more data on the stream.
    - If we want to react to that completion, we can add a third method to our subscribe method.
        - It is to clean up, or do something else.
        - We don't need to unsubscribe if the observable is completed.
    - Complete is different that to get an Error.

## Observables & You.
    - What we create is a custom observable.
    - We rarely will create our own observables.

## Understanding Operators.
    - The data reaches first to the operators and later to the subscription.
    - Every observable has a pipe method.
    - Pipe goes where we subscribe to our observable.
    - It is used to transform data, before manipulate it.

## Subjects.
    - It is a special kind of observable.
    - You can call next from outside, it is an "Active" observable.
        - Can be triggered from code.
    