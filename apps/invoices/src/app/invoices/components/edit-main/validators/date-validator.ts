import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const selectedDate: Date = control.value;
  if (!!selectedDate) {
    return selectedDate > new Date() ? { ['MAX_DATE_EXCEEDED']: true } : null;
  }
  return null;
}
