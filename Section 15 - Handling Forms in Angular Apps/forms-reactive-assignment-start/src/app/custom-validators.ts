import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static forbiddenProjectNameMethod(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'Test') {
          return {'projectNameIsForbbiden': true}
        }
        return null;
    }
    
    static forbiddenProjectNameMethodAsync(control: FormControl): Promise<any> | Observable<any> {
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