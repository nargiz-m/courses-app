import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {
    transform(value?: Date): string {
        if(!value) {
            return '';
        }
        const day = ('0' + value.getDate()).slice(-2);
        const month = ('0' + (value.getMonth() + 1)).slice(-2);
        const year = value.getFullYear();
        return `${day}.${month}.${year}`;
    }
}