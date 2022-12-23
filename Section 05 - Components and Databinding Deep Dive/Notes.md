# Angular - The Complete Guide
## Section 05: Components & Databinding Deep Dive

## Module introduction.
    - We will use a base app.

## Splitting Apps into components.
    - Split the project to re-use them in the future.
    - We created two new components, and now we need fix some problem and share date from one component to another component.

##  Property & event binding overview.
    - Send/Receive data/events.
    - We can use:
        - HTML Elements: Native properties and events.
        - Directives: Custom properties and events.
        - Components: Custom properties and events.

## Binding to custom properties.
    - By definition, properties of a component are accessible just for the component, not for other components.
    - To make them visite for other components, we need to use a decorator.
        - @Input before the binding (variable).
        - It is used to send data from parents to child components.
        - In the parent component:
            - [variableChildComponent]='variableParentComponent'

## Assigning an alias to custom properties.
    - [element] is what we defined.
    - We can use an alias in the child component.
        - @Input('aliasName') element ....
    
## Binding to custom event.
    - We need to inform to the parent component a change has been made.
    - In the parent component (eventToListen)='methodToExecuteInTheParent($event)'
    - In the child component:
        - @Output(eventToListen) = new EventEmitter<{data: string}>()
        - this.eventToListen.emit({data: data}) 

## Assigning an alias to custom events.
    - It is the same as Input aliases.
    - @Output('newAlias').

## Custom property and event binding summary.
    - This is for communication between components.
    - @Input() send data from the parent to the child component.
    - @Output() send data from child to the parent component.

## Understading view encapsulation.
    - The CSS applied in a component it belongs to that component.
        - That is not a normal browser behavior, but Angular does it.
    - In the developer tools, the selector (name) changed.
    - Angular encapsulates the CSS classes, to make them unique, and don't mix up styles.
        - Angular enforces this behavior to make them unique.

## More on view encapsulation.
    - We can override this encapsulation.
        - In the componenet definition we need to add:
            - encapsulation: ViewEncapsulation.None (no view encapsulation, it means styles are globally).
            - encapsulation: ViewEncapsulation.ShadowDom (same result as emulated but with browser than emulate it).
            - encapsulation: ViewEncapsulation.Emulated (default behavior).

## Using local references in Templates.
    - Local references can be place in any HTML element.
    - It will have a reference to the specific element with all its properties.
        - #serverNameInput.
    - We can use in the template, just in that template.
        - Not in the ts file.

## @ViewChild() in Angular 8+.
    - @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
    
## Getting access to the template & DOM with @ViewChild.
    - We can access to our references in our TypeScript code.
    - The decorator is @ViewChild('nameOfTheReference', {static:true}) variableName: ElementRef
    - To access the value:
        - this.variableName.nativeElement.value

## Projecting content into components with ng-content.
    - Eveything that we place between in the opening and closing tag of our component is lost by default, it is removed from the DOM.
        - Example:
            <my-component><p></p></my-component>
    - There is a special directive
        - <ng-content></ng-content>

## Understading the component lifecycle.
    - Angular has some lifecycle hooks.
    - They are different phases during the lifecycle of our app.
    - They are:
        - ngOnChanges: called after a bound input property changes.
        - ngOnInit: called once the component is initialized, it runs after the constructror.
        - ngDoCheck: called during every change detection run.
        - ngAfterContentInit: called after content (ng-content) has been projected into view.
        - ngAfterContentChecked: called every time the projected content has been checked.
        - ngAfterViewInit: called after the component's view (and child views) has been initialized.
        - ngAfterViewChecked: called every time the view (and child views) has been checked.
        - ngOnDestroy: called once the component is about to be destroyed.

## Seeing lifecycle hooks in action.
    - ngOnInit
        - ngOnInit runs after the constructor.
        - ngOnInit runs when the components is called.
    - ngOnChanges
        - ngOnChanges should run first, after the constructor and before ngOnInit.
        - It accepts an argument of type SimpleChanges.
        - If we change anythin, ngOnInit or the constructor is not called.
    - ngDocheck
        - It is called in every change.
    - ngAfterContentInit
        - It is called once when we run our app.
    - ngAfterContentChecked
        - It is called after each detection cycle.
    - ngAfterViewInit, ngAfterViewChecked
        - It is called after the content has been checed.
    - ngOnDestroy
        - It is called when the component is destroyed

## Lifecyle hooks and template access.
    - With the hook ngAfterViewInit we can access the template and use its values.

## @ContentChild() in Angular 8+.
    - The same change than ViewChild.

## Getting access to ng-content with @ContentChild
    - If we have a reference between the content of our component, example:
        - <component><p #reference></p></component>
    - With the ViewChild component is not possible to handle it.
    - But we can use ContentChild instead.
    - It handles to work with a value from other component and check in other component.

## Wrap up
    - Lifecycles.
    - Databinding.
    - References.
    - Encapsulation, etc.


