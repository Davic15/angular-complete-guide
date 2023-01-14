import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  status = ['Stable', 'Critical', 'Finished'];
  signupForm!: FormGroup;
  forbiddenProjectName = ['Test'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.forbiddenProjectNameMethod], CustomValidators.forbiddenProjectNameMethodAsync),
      'projectEmail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log('Clicked!');
    console.log(this.signupForm.value)
  }
}
