import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: '<app-customers></app-customers>'
})
export class AppComponent implements OnInit {
  //title = 'Hello World using databinding';
  //title: string = '';

  constructor() {
  }

  ngOnInit(): void {
    //* Place to initialize our component with data.
    //* It could be from a data base, etc.
    //this.title = 'Hello World using Databinding.'
  }
}

//* The app-root will be the first thing to run.
//* template allows us to write code inside the app.component.ts.
