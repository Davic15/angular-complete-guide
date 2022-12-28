# Angular - The Complete Guide
## Section 09: Using Services & Dependency Injection

## Module Introduction.
## What are services?.
    - Duplication of data and/or code.
    - If we want to access some data and maybe we can use later in other part.
    - Data and duplicate code are a good example of services.
    - A service is a central repository.

## Why would you need services?.
    - We will work in the application provided it.

## Creating a logging service.
    - A service is a normal TypeScript class.
        - It means no decorator is required.
        - It would be added in a shared folder, or any place that we want.
    - The class is a centralized code.
    - To use the Service we don't need to import it and use it.
        - In theory it could work, but Angular provides a better way to use services.
        - Do not create the instance of that class.

## Injecting the logging service into components.
## Angular depencedy Injector.
    - A dependency is something a class of ours will depend on.
    - The dependency injector simply injects this dependency, injects an instance of this class into our component automatically.
    - We need to tell Angular that we require that instance.
    - It goes directly in the constructor definition.
    - We need to provide a service, it means we need to tell Angular how to create it.
        - It goes inside the decorator in the providers property, and it takes an array.
    - Summary:
        - A service is a normal class in TypeScript.
        - We need to Inject it in the constructor of that component.
        - Add another property (providers), in the decorator of the component.
    
## Creating a data service.
    - It is the same than before.
    - We need to Inject it in the constructor.
    - And add the providers attribute.
        - To get data at the start we need to write the code on ngOnInit method.

## Understanding the Hierarchical Injector.
    - Angular dependency injector is an hierarchical injector, it means, if we provide a serive, Angular know how to create an instance of it and for its child components.
    - We can provide a service in AppModule, same instance of service is available Application-wide.
    - We can provide a service in AppComponent, same instace of Service is available for all components (but not for other services).
    - We can provide a service in Any other component, same instance of service is available for the component and all its child components.

## How many instances of services should it be?.
    - In our project we have three different instances.
    - To solve this issue, we need to delete the service from the provides attribute, but not from the constructor definition.

## Injecting services into services.
    - We can add it in the AppModule, and we are sure our app can get the same instance of the class in the whole app.
    - If we want to add a service into another service, the service needs some metadata (decorator) attached to it.
    - There is a specific metadata we should attach, the decorator use it is @Injectable.
        - We don't add @Injectable to the service you want to inject, but to the service where you want to inject something.
    - In new version of Angular we need to add the @Injectable decorator, but it can be omitted though.

## Using services for cross-component communication.
    - Services help us to work with data from different components, and organize better our code.
    - We can emit events inside our service.
        - We define the EventEmitter inside the service.
        - We need to subscribe.

## Different way of injecting services.
    - Already explained.
