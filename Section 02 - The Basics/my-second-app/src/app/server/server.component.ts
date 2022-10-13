//* A component is a TypeScript class. Angular can instantiated.
//* Naming convention NameComponent
//* We need to tell Angula this is a component, so we need to import Component.
//* core packages allows to use the core functions of Angular
//* We need to modify our app module to use the component
//* to learn we will use app module.
//* A module give Angular information about the features about our app.





import { Component } from "@angular/core";
//* Metadata for this class, to tell Angular what to do with this class.
//* selector: 'any name' unique selector.
//* template: '' the html file for this component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

}