import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('signupForm') signupform!: NgForm;
  submitted = false;
  selectedSubscription = 'Advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupform.value.userData.email;
    this.user.subscription = this.signupform.value.subscription;
    this.user.password = this.signupform.value.password;
    console.log(this.signupform)
  }
}
