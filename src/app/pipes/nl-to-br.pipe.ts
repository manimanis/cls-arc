import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nlToBr'
})
export class NlToBrPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br/>');
    return null;
  }

}
