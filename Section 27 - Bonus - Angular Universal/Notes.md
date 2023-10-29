# Section 27 - Bonus - Angular Universal

## Module Introduction
    
    - Converting an Angular app to a Universal app.

## Angular Universal - What and Why?

    - Angular App .
        - Client side (runs in browser).
    - Possible disadvantages.
        - No / bad SEO.
            - Because crawlers see and empty page.
        - Slow page load.
            - Because JavaScript must be executed first.
    - Angular Universal
        - First Page gets pre-rendered on the server -> Thereafter, it's still a SPA.
        - Client - side.
            - Default Angular App (SPA).
        - Server - Side.
            - Server side pre-rendeting of initial page.

    - If we inspect our web application, we see nothing in the index.html.
        - Just the app-root.
        - This runs due the JavaScript in the browser.
        - The application that we get from the server is almost empty, we can see just scripts.

## Converting the App to a Universal App

    - We need to install a package.
        - ng add @nguniversal/express-engine.

## Analyzing and Running Server-side code

    - In the server.ts we have the code we need, it is like a server for our application.
    - Also the package.json has changed with some new commands to run our app in universal mode.
    - This is to test the server-side rendering application but locally.

## A closet look at the server-side Code.

    - The server.ts could change over time in the newest versions.

## Integrating a REST API
    
    - We can build a full stack application in the server.ts
    - Some API can be added.

## Some notes about deploying Angular Universal Apps

    - To deploy our app, we need a provider that can handle server side too.
    - A good way is to search fro nodejs hosting provider.
    - To build our app, we should write npm run build:ssr
        - It gives us two folders, client and server.
    - After build it, we should write npm run serve:ssr.
        - To keep the application up and running.

## Angular Universal Gotchas.

    - You MUST NOT use any browser-only APIs like document.querySelector()  in your Angular code!.
    - Use Angular features only.
    