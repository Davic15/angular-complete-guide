# Section 18: Making HTTP Request

## Module Introduction

    - Http and backend Interaction.
    - We don't have our data available, just in the browser.
    - Till now we dont fetch data in any backend.

## How does Angular interact with backends?

    - Angular did not connect directly to the backend.
        - So we don't have our credentials in our Angular code.
    - Angular uses Http requests to connect to a server or backend.
        - API (Rest, GraphQL).

## The anatomy of a Http request

    - URL (API end point) => /post/1
    - HTTP verb => POST, GET, PUT, etc.
    - Headers (Meatadata) => {'Content-type': 'application/json'}
    - Body => {title: 'New Post'}

## Backend (FireBase) setup

    - Real time database in Firebase.

## Sending a POST Request

    - We need to import HttpClientModule in the app.module.ts, inside imports.
        - With it we can send Http requests.
    - Http requests are also managed my observables.
        - Subscribe to them, get data, etc.
    - If we are not subscribe, the Http request does not work.

## Getting Data

    - The same than post request, and the same with subscribe.
