# Section 20: Authentication and Route Protection in Angular (In the Course Project)

## Module Introduction

    - Authentication in Angular.

## How Authentication Works

    - Client -> Server.
        - Send Auth Data.
    - Server -> Client
        - Session.
    - Server -> RESTful API is stateless!.
        - Token
        - It is created in the server and send to the client.
        - The token is stored in the Storage.
        - And we send the token to authorize subsequent request.

## Adding the Auth Page

    - Create a new component named auth.
    - A single form.

## Switching between auth modes

    - Using buttons to switch modes, but only hard coded.

## Handling Form Input

    - Using Template driven Approach to work with forms.

## Preparing the Backend

    - Firebase to handle the Backend.

## Make sure you go recipes in your backed

    - Save some data in the Backend.

## Preparing the Signup Request

    - With a service we can do it.
    - Http request (post request).

## Sending the Signup Request

    - Using the ApiKey and the Url in the post request.

## Adding a Loading Spinner and Error Handling Logic

    - Component with a spinner.

## Improving Error Handling

    - In the response from the Backend, we have some error messages, we can be more specific.
    - We can use the pipe catchError to detect and catch error in our service.

## Sending Login Request

    - The same than Sign up.

## Login Error Handling

    - A function that handles the error messages.

## Creating and storing the user data

    - Model user.
    - Handle login and sign up and sign in in a better way.
    - Code Refactoring.

## Reflecting the Auth State in the UI

    - Modify the header component to show what is available for logged in users.

## Adding the token to outgoing requests

    - We should add the token, to tell Firebase we are authenticated.

## Attaching the token with an interceptor

    - The inteceptor helps us to handle requests.

## Adding logout

    - Adding the logout method.

## Adding Auto-Login

    - Persisting data, after login.
        - LocalStorage or cookies to have this.

## Adding Auto-Logout

    - Delete the persistant data from the localstorage.

## Adding an Auth Guard.

    - Protect routes and redirect in case of the user tries to move to a protected route.

## Wrap up

    - Summary.
