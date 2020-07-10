import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (!!control.value) {
    return control.value > 12 || control.value < -12 ? { ['MAX_DATE_EXCEEDED']: true } : null;
  }
  return null;
}
