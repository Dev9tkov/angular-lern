import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase'
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    // каждое слово с заглавной буквы
    return value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  }
}
