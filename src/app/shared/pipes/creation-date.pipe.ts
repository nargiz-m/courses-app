import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'creationDatePipe'
})
export class CreationDatePipe implements PipeTransform {
    transform(value?: Date): string | null {
        return new DatePipe('en-US').transform(value, 'dd.MM.YYYY');
    }
}