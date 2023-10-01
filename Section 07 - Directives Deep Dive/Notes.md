# Section 07: Directives Deep Dive

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
    * The example is basic-highlight

## Using the render to build a better attribute directive.

    - Access elements is not a good practice, the previous example is fine, but not the best.
    - The tool used is Render2, it is the best way to access the DOM.
        - We can set some styles.
        - We need the element to work with.
            - This two variables should be defined in the constructor.
    - Render2 uses the element, which style, the value of this property, and the fourth argument is a flag but this is optional.
    * The example is better-highlight

## Using HostListener to listen to host events.

    - We will improve the previous example, with hover options.
    - We need to react to some events.
    - A new decorator is used, HostListener.
        - @HostListener('mouseover') mouseover(eventData: Event){}
        - @HostListener('Mouse Event') Method to handle it (data)

## Using HostBinding to bind to host properties.

    - We can use another decorator, that doesn't use Renderer2
    - The decorator is HostBinding
        - @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

## Binding to directive properties.

    - We can use differnet color if we want.
    * A bit different.

## What happens behind the scenes on structural directives.

    - What is the * required?, It indicates to Angular that is a structural directive.
    - This is a "nice" way to use it.
    - Behind the scenes Angular needs to transform the ng into something different.
    - <ng-template> is an element that is not render by itself, but Angular can render it base in any condition.
        - <ng-template [ngIf]="condition"> this is how it works behind the scenes.
    - It is not used, but it is good to know it.

## Building a structural directive.

    - First create a new directive.
    - Use Input to get the value to work with.
    - We need the Template Reference and the View Container Reference.
    - To use we need to *appUnless='condition'.

## Understanding ngSwitch

    - It is used [ngSwitch]="value".
    - For each condition *ngSwitchCase="5"
    - For the default value *ngSwitchDefault
