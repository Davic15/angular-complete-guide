# Angular - The Complete Guide
## Section 07: Directives Deep Dive

## Module introduction.
    - Attribute vs Structural
        - Attribute Directives:
            - Look like a normal HTML attribute (possibly with databinding or event binding).
            - Only affect/change the element they are added to.
        - Structural Directives.
            - Look like a normal HTML attribute but have a leading * (for desugaring).
            - Affect a whole are in the DOM (elements get added/removed).

## ngfor and ngIf Recap.
    - Project already provided.
    - We can't have more than one structural directive in the same element.

## ngClass and ngStyle Recap.
    - Working with ngClass and ngStyle.

## Creating a basic attribute directive.
    - We can create a file that will contain our directives.
    - The directive decorator is used.
        - Inside the object decorator we need to add a selector, it should be unique and it can use camel case.
    - We need to access to the specific element, Angular helps us with it.
        - Inside the constructor we need to define the ElementRef to access the element.
    - To write the code of the directive we can write inside ngOnInit.
        - We can access the elementRef and the list of styles we want to add/overwrite.
    - We can select it as attribute, we can do this selector: '[appOurStyle]'.
        - Inside our HTML tag we can use <p appOurStyle>Hi</p>.
    - If we write like this, selector: appOurStyle, it will be selected by element.

## Using the render to build a better attribute directive.
