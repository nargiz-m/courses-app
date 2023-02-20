import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fomattingMinutes'
})
export class FomattingMinutesPipe implements PipeTransform {
  transform(value: number | string): string {
    let minutesValue = typeof(value) === 'string' ? parseInt(value) : value;
    if(minutesValue < 0) {
      minutesValue = 0;
    } 
    let hours = Math.trunc(minutesValue/60).toString();
    let minutes = (minutesValue%60).toString();
    if(parseInt(hours)/10 < 1) {
      hours = '0' + hours;
    }
    if(parseInt(minutes)/10 < 1) {
      minutes = '0' + minutes;
    }
    return `${hours}:${minutes} hour`;
  }
}
