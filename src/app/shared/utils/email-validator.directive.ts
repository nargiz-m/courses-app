import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
    const emailReg = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    return (control: AbstractControl): ValidationErrors | null => {
        const valid = emailReg.test(control.value);
        return valid ? null : {emailInvalid: true};
    }
}