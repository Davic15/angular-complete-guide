# Section 15: Handling Forms inAngular Apps.

## Module Introduction.

    - Forms in Angular are a bit tricky.
    - We need to handle form before send it to the server.
    - Inform the user about wrong input.

## Why do we need Angular's Help?.

    - Check validity using Angular.
    - Retrieve the inputs and validate if they are ok with my applications.
    - We need a JavaScript representation to work with forms.
        - Value of the form, and key: value pairs.
            - { value: { name: 'David', surname: 'Macias'}}
    - We need to parse the values and work with a JavaScript Object.
        - Use a valid key/value pair to check if our input is valid or not.

## Template-Driven (TD) vs Reactive Approach.

    - Angular has two approaches to work with forms.
        - Template-Driven (easy way)
            - Angular infers the Form Object from the DOM.
        - Reactive (hard way)
            - Form is created programmatically and synchronized with the DOM.
            - We have more control with this approach.

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
        - We can use ngModel (with any extra information).
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

# Reactive Approach.

## Reactive Setup.

    - Setting the Application.
    - In the reactive approach the form is created programmatically, so we need to first creating in the code.
    - Angular provides some tools to create in a correct way.
        - We need to import it in the app.module.ts
            - ReactiveFormsModule.

## Reactive: Creating a form in Code.

    - We need to use the same names in our code.
    - For each FormControl we need to add 2 arguments.
        - Initial state.
        - Array of validators (or a single validaror).

## Reactive: Syncing HTML and Form.

    - Now it is time to sync the code with the template.
    - We need to set the formGroup in our template, in the form control.
    - In each input we should add formControlName

## Reactive: Submitting the form.

    - We need to use ngSubmit directive, in the form tag;
    - We don't need to get the referece from the template, because we have all we need in the code.

## Reactive: Adding validation.

    - We can validate and/or configure the inputs in the code.
    - The second argument is where validators go.
    - We can pass a single validator or an array of validators.

## Reactive: Getting access to controls.

    - We can't access using ngModel.
    - we need to use a method using he variable name or path, to see if the value is valid or not.
        - Using the get helper method.
        - We can use the same classes.

## Reactive: Grouping Controls.

    - The path mentioned before, is related to formGroups inside other formGroups.
    - Works fine for nested forms.
    - We need to group our controls and add FormGroupName directive and update the path of each control like userData.username.

## Reactive: Arrays of form controls (FormArray).

    - Add an array of contols.
    - We need to use FormArray.
    - It is useful if we want to add a new control or new controls.

## Reactive: Creating custom validators.

    - A validator is a function to check if the value is ok or not.
    - It returns true or null.
        - We can't return false.

## Reactive: Using Error Codes.

    - Error property in the developer tools is null.
    - On each individual control Angular adds this error.

## Reactive: Creating a custom async validator.

    - Validate anything is done mostly in a web server, so we need to wait the response.
    - We can add the new validator as a third argument, in our email definition.

## Reactive: Reacting to status or value changes.

    - We have two observables in our form, status and value.
    - We can use to react to values ot status.

## Reactice: Setting and patching values.

    - setValue, populate values in our form.
    - The same with patchValue.

## Assignment.
