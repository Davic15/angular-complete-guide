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

## Using RxJS operators to transform response data

    - We can use the pipe method in the subscribe method.
    - Also with map method provided by rxjs to transform our data.

## Using Types with the HttpClient

    - Generate a model for the post.
    - We can add our type/model in the get.
        - Example: this.http.post<{ [key: string]: Post }>

## Outputting Posts

    - We can us ngFor to display our post in the template.

## Showing a loading indicator

    - Use a flag we can set a loading state with to display a spinner or a message with the loading message.

## Using a service for Http Requests

    - Some logic should be place in services, instead of components.
    - The posts services is created to fetch all.

## Services and Components working together

    - We can return our observable and in the app.component.ts we can subscribe to get the data, to display it in our template.

## Sending a Delete Request

    - The delete method goes inside the service and we can call it from the app.component.ts and subscribe to it.

## Handling Errors

    - In the subscribe method we can add another callback to handle errors.
        - In any error we can catch it and handle it.
    - We can analyze the error and send a different message or handle it in a different way.

## Using subjects for error handling

    - We can use it to handle errors, and we need to create a Subject to handle it.

## Using the catchError Operator

    - We can use catchError and throwError to handle it.

## Error handling and UX

    - Display error messages and loading messages in a proper way.

## Setting Headers

    - Configure our request with headers, for example POST, PUT, etc.
    - We need to import HttpHeaders.

## Adding Query Params

    - Below headers we can add params.
    - They are query params, added at the end of the URL;

## Observing different types of responses

    - Access to the response, we can target the body.
    - After the URL in the http request, we can add a json object and see what kind of response we want.

## Changing the respose body type

    - The response can be changed, base on our needs.

## Introducing Interceptors

    - The interceptor will run right before the request leaves our application.
    - We should return to the interceptor runs normally.
    - In the app.module.ts we need to inject the interceptor, in providers.
    - In this case interceptor will run in every http request.

## Manipulating Request Object

    - We can modify the URL, but not directly we should clone it first.

## Response Interceptor

    - handle gives us an observable, so que can subscribe to it, inside the interceptor.

## Multiple Interceptors

    - We can write different interceptors and add them.
    - The order should not matter.

## Wrap up

    - A summary of the above.
