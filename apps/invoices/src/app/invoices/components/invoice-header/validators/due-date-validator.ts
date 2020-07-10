import { FormGroup, ValidatorFn } from '@angular/forms';

export function dueDateValidator(): ValidatorFn {
  return (control: FormGroup): { [key: string]: boolean } | null => {
    const dueDate: Date = control.get('dueDate').value;
    const date: Date = control.get('date').value;
    return dueDate < date ? { ['DUE_DATE_MAX_DATE_EXCEEDED']: true } : null;
    return null;
  };
}
