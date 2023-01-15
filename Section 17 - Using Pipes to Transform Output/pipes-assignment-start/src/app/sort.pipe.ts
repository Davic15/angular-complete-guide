import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a: string, b: string) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1
      }
    });
  }

}
