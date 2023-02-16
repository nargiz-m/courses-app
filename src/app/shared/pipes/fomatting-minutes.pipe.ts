import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fomattingMinutes'
})
export class FomattingMinutesPipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.trunc(value/60).toString();
    let minutes = (value%60).toString();
    if(parseInt(hours)/10 < 1) {
      hours = '0' + hours;
    }
    if(parseInt(minutes)/10 < 1) {
      minutes = '0' + minutes;
    }
    return `${hours}:${minutes} hour`;
  }

}
