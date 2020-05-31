import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, ...args: any[]) {
    if (value) {
      return value.substr(0, args[0]) + args[1];
    }
    return '';
  }
}