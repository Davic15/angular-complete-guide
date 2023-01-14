import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNameMethod.bind(this)], this.forbiddenProjectNameMethodAsync),
      'projectEmail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Finished')
    })
  }

  onSubmit() {
    console.log('Clicked!');
    console.log(this.signupForm.value)
  }

  forbiddenProjectNameMethod(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectName.indexOf(control.value) !== -1) {
      return {'projectNameIsForbbiden': true}
    }
    return null;
  }

  forbiddenProjectNameMethodAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test1') {
          resolve({'projectNameIsForbbiden': true})
        } else {
          resolve(null)
        }
      }, 1500)
    });
    return promise
  }

}
