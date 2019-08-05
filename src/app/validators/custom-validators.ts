import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export class CustomValidators {
  static getValidators(type: string) {
    type = type.toLowerCase();
    if (['téléphone', 'fax'].includes(type)) {
      return this.phone(8, 16);
    }
    if (['email'].includes(type)) {
      return [Validators.required, Validators.email];
    }
    if (['site web'].includes(type)) {
      return [Validators.required, this.url];
    }
    return Validators.required;
  }

  static voidValidator(c: AbstractControl): { [key: string]: boolean } | null {
    return null;
  }

  static phone(minDigits: number, maxDigits: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      const value = c.value as string;
      let counter = 0;
      for (let i = 0; i < value.length; i++) {
        const car = value[i];
        if (car !== '+' && car !== ' ' && (car < '0' || car > '9')) {
          return { 'phoneFormat': true };
        }

        if (car >= '0' && car <= '9') {
          counter++;
        } else if (car === ' ') {
          if (i === 0 || value[i - 1] === ' ') {
            return { 'phoneFormat': true };
          }
        } else { // car === '+'
          if (i !== 0) {
            return { 'phoneFormat': true };
          }
        }
      }

      if (counter < minDigits || counter > maxDigits) {
        return { 'phoneFormat': true };
      }

      return null;
    };
  }

  static url(c: AbstractControl): { [key: string]: boolean } | null {
    if (!/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(c.value)) {
      return { 'urlFormat': true };
    }
    return null;
  }
}
