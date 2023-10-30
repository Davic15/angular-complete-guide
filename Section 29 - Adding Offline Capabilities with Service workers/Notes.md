# Section 29 - Adding Offline Capabilities with Service workers

## Module Introduction

    - Turn an online applicatin into an offline application.

## Adding Service Workers

    - What are service Workers?
        - Single Thread (Loaded JS, HTML).
        - Runs on one single thread, attached to individual HTML pages.
        - Single Thread - Service Worker
            - Runs on additional thread, decoupled from HTML pages.
            - Manages All pages of given scope (e.g all pages of a domain).
    - We need to install a new package.
        - ng add @angular/pwa.

## Catching Assets for Offline Use

    - In the ngsw-config.json.
    - Analyze the file mentioned above.
    - We can add some urls in the file, and they will be download and cached.

## Catching Dynamic Assets and URLS

    - We can define some options to work with our endpoints.
    