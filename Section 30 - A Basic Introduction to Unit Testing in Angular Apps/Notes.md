# Section 30 - A Basic Introduction to Unit Testing in Angular Apps

## Introduction
    
    - Improve projects.
    - Write test with CLI.

## Why Unit Test?

    - Does the component work as intended?
    - Does the pipe work as intended?.
    - And any other question we have related to Components.
    - Guard against Breaking changes.
    - Analyze Code Behaviour (Expected and unexpected).
    - Reveal Design Mistake.

## Analyzing the testing setup (as created by the CLI)
    
    - A new App contains some test files.
    - By default it contains some test.
    - All blocks are independent, the first one to run is the describe method.

## Running Test (with the CLI)

    - To run a test we can write ng test.
    - A tab in our browser will be opened with the result.

## Adding a Component and some fitting Test

    - Write a basic test, to check if the application is created.

## Testing Dependencies: Components and Services

    - For services we need to detectChanges to get data from the service.

## Simulating Async Task
    
    - We can simulate an async task.

## Using "fakeAsync" and "Tick"

    - Another way to work with Async test.

## Isolated vs Non-Isolated Test

    - UserComponent -> ReversePipe -> UserService.
    - Pipes can be tested too.

## Further Resources and where to go next

    - Official Docs.