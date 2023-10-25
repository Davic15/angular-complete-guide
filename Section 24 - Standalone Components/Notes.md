# Section 24 - Standalone Components

## Module Introduction

    - Building components without @NgModule.
    - Basic Standalone Components.
    - Adding Services, Routing and Lazy Loading.
    - This is a preview feature.

## Starting setup and why we want standalone components.

    - Boiler plate code to write.
    - Don't use NgModule, but can be mixed both ways.

## Building a First Standalone Component

    - We build a regular component.
    - We need to add standalone in the Component declaration, and delete the import from the app.module.
    - Details components could be added into imports in the NgModule in the app.module.
        - Our Component does not know about other componets.

## Standalone Components are now stable

    - They are stable since Angular 15.

## Standalone directives and connecting building blocks

    - Directives are also pipes.

## Migrating Another Component

    - We can migrate different components.

## A standalone root component

    - We can change the root component to standalone, but we need to modified also the main.ts file.

## Services and Standalone Components
    
    - We can use Injectable or not.
    - We can add services in main.ts, because we don't have NgModule on app.module.

## Routing with Standalone Components

    - New Project to work with routes and Standalone components.
    - In the main.ts file we need to add the Routing and in the app.component, we need to add the RouterModule.

## Lazy Loading

    - We can use standalone with normal components in the routing.
    - With standalone component we can load them lazily.

## Summary
    
    - Convert normal components into Standalone components.