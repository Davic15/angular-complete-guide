import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-03';
  showSecret = false;
  logArray: number[] = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.logArray.push(this.logArray.length + 1)
    console.log(this.logArray)
  }
}

