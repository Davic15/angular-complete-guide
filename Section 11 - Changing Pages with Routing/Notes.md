# Angular - The Complete Guide
## Section 11: Changing Pages with Routing.

## Why do we need a Router?
    - We will add some routes.
    - Angular router is needed to achieve this.

## Understanding the example project.
    - The app has three sections:
        - Home.
        - Servers.
            - View and edit servers.
            - A service is used to load and update servers.
        - Users.
            - View users.

## Setting up and Loading Routes.
    - All components are loaded in the app component (it will be changed in the future using routes).
    - We need to register those routes in app.module.ts, because it is app wide file.
    - We need to add the Routes from angular/core.
        - It gets an array with the possible routes we want to use.
        - We don't need to add "/" before our path.
        - The path generally is a component.
        - Example:
            - { path: 'users', component: UserComponent }
    - After we need to register our routes.
        - With the RouterModule from angular/core.
        - Example:
            - RouterModule.forRoot(appRoutes).
    - After we need to inform Angular where to load those routes, using a special directive.
        - It is router-outlet
    - Now we can use those routes in the browser (but we need to type them in).

## Navigating with router links.
    - If we add the link in href we will refresh the page every time.
    - There is a special directive that Angular provides.
        - It is routerLink.
        - It handles the click in a different way, it prevents default and load the path (with the component), need it.

## Understanding navigation paths.
    - In out root level we have relative path.
    - If we use a relative path in other component we have to use absolute path.

## Styling active router links.
    - We can add some visual indication when a link is cliked or if we are in an specific path.
    - We can add it dynamically using Angular (directive).
        - It is routerLinkActive="myCSSClass"
    - The default path is always link, but we can routerLinkActiveOptions, to change the configuration.
    - Example:
        - routerLinkActiveOptions="{exact: true}"

## Navigating programmatically.
    - Trigger the navigation from our TypeScript file.
    - We can inject the Router.
        - Use an array witht he nagivate method.

## Using relative paths in programmatic navigation.
    - If we click a link and we are in the same page, it doesn't work, it doesn't reload the page.
    - We can add some option to configure the navigate method.

## Passing parameters to routes.
    - In the app.module.ts we can add another route with the parameters needed.
    - Example:
        - { path: 'users/:id', component: UsersComponent }
    - We can now load a component with this parameter.

## Fetching route parameters.
    - In our component we can access to our parameters, using the ActivatedRoute.
    - The parameters can be accessed in this way.
        - this.route.snapshot.params['id'],
            - Where the id is the parameter of the route.
    - In our browser we can navigate.
        - localhost:4200/users/1

## Fetching Route parameters reactively.
    - We fetched our data with a snapshot.
    - But we can reload in a different way.
    - Observables are the best way to work with async code.
    - When changes are not reflected in the template, we need to use a callback function (async).

## An important note about route observables.
    - Reload our page to refresh it if we are already there.
    - Angular unsubscribe when the component is destroyed.
        - If we add our own observables, it is a good way to unsubscribe onDestroy method.

## Passing query parameters and fragments.
    - These are parameters separated with "?".
    - ? -> for a query
    - # -> to jump to a specific part of our page.
    - Passing parameters
        - { path: 'servers/:id/edit', component: EditServerComponent }
    - In our template we can add:
        - queryParams and add key: value pairs.
            - http://localhost:4200/servers/5/edit?allowEdit=1
        - fragment and add where to go in out template.
            - http://localhost:4200/servers/5/edit?allowEdit=1#loading
    - Programmatically
        - router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'})

## Retrieving query parameters and fragments.
    - It is the same than before, the same code.

## Practicing and some common gotchas.
    - Modified some links to work in a dynamic way.

## Setting up child (nested) routes.
    - We can load some templates next to our menu, using nested routes.
    - We can group routes as make them children.
    - Example:
        { path: 'servers', component: ServersComponent, children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent }
            ] 
        },
    - In this case we need to use router-outlet at the top level component, because it works in this way.

## Using query parameters - practice.
    - Updating some routes.

## Configuring the handling of query parameters.
    - We can preserve our old query parameters and keep them, using queryParamsHandling: 'preserve'

## Redirecting and Wildcard Routes.
    - 




    


    
