import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function nameValidator(): ValidatorFn {
    const nameReg = new RegExp('^[A-Za-z0-9]*$');
    return (control: AbstractControl): ValidationErrors | null => {
        const valid = nameReg.test(control.value);
        return valid ? null: {nameInvalid: true}
    }
}