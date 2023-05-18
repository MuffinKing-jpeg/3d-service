import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {AsYouType} from 'libphonenumber-js';

const numberInProgress = new AsYouType('UA');

export function phoneNumberIsValid(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    numberInProgress.reset();
    numberInProgress.input(control.value);
    const forbidden = numberInProgress.isValid() && numberInProgress.isPossible();
    return !forbidden ? {forbiddenNumber: 'No such number!'} : null;
  };
}
