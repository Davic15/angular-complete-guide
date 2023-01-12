# Angular - The Complete Guide
## Section 15: Handling Forms inAngular Apps.

## Module Introduction.
    - Forms in Angular are a bit tricky.
    - We need to handle form before send it to the server.
    - Inform the user about wrong input.

## Why do we need Angular's Help?.
## Angular and Forms.
    - Retrieve the inputs and validate if they are ok with my applications.
    - We need to parse the values and work with a JavaScript Object.
        - Use a valid key/value pair to check if our input is valid or not.

# Template-Driven
## Template-Driven (TD) vs Reactive Approach.
    - Angular has two approaches to work with forms.
        - Template-Driven (easy way)
            - Angular infers the Form Object from the DOM.
        - Reactive (hard way)
            - Form is created programmatically and synchronized with the DOM.

## An example form.
    - Our form doesn't have the action attribute, or the method (post, get, etc).
    - This is not a Form that will be submitted to any server.
    - Angular will handle this form.

## TD: Creating the form and registering the controls.
    - In our app module we need to import FormsModule.
        - Forms functionalities.
    - Angular will create for us an object representation when a form is created.
        - <form></form>
    - We need to register the controls, some are done automatically, others no.
        - Adding the controls we want.
        - We can use ngModule (with any extra information).
        - To work with this approach we need to use the name attribute.
    - Example:
        - <input ngModel name="username" type="text">

## TD: Submitting and using the form.
    - We can use ngSubmit on the form element with a method attach on it.
    - We can use a local reference "#myReference" and use it in the method.
        - We can use the ngForm to the get all elements in the form.
        - Example:
            - #f="ngForm".
    - We can see the values.

## TD: Understanding form state.
    - With the data shown in the last video, we can see all the information related to the form state.
    - For example: dirty is true because we change a value in the form, the valid us true, it means the form is valid.


## TD: Accessing the form with @ViewChild.
    - In the example we submitted the form by passing the form with ngForm.
    - Other approach could be with @ViewChild (access a local reference).

## TD: Adding validation to check user input.
    - We can validate the input in the front and back end.
    - If we use Template driven approach, we can add validation only in the template (HTML).
    - Example:
        - required, email (by Angular)
    - There are some build-in validators can we use.
    - Some classes are added in our HTML tag. ng-dirty, ng-touched, ng-valid.
        - Can be the opposite too.

## TD: Using the form state.
    - Angular handle the state of each control, and add some extra classes.
    - we can access to the state of the form with the variable that we defined earlier
    - We can disable buttons with the valid or invalid state.
    - We can use those extra classes that Angular adds to create some styles.

## TD: Outputting validation error messages.
    - We can use NgModel to get a reference to a control and check if the data is valid or not.

## TD: Set default values with ngModel property binding.
    - Default value for our dropdown.
    - With an ngModel attached to any variable.

## TD: Using ngModel with Two-Way-Binding.
    - We can use two-way-binding with forms.
    - We can use:
        - No binding to tell Angular the input is a control.
        - One way binding to give that control a default value.
        - Two way binding to instant output that value.

## TD: Grouping form controls.
    - We can use ngModelGroup directive, to get all information but in a JavaScript object.
    - Example:
        - ngModelGroup="userData"
    - We can access to the ng classes provided by Angular to check validity.
    - We can access to the JavaScript object with ngModelGroup

## TD: Handling Radio Buttons.
    - We can use as normal radio button.

## TD: Setting and patching form values.
    - We can set values using a button.
    - It is not a good approach, becase it will delete the previous data.
    - Other better approach is to patch value.

## TD: Using form data.
    - Display data.

## TD: Resetting Forms.
    - We can reset the form, not only the values, the states too.

## Practice.

# Reactive Approach
## Reactive Setup
