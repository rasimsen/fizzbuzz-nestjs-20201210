import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {
  validate(arg0: number): string {
    if (arg0 % 15 === 0) {
      return 'FizzBuzz';
    }
    if (arg0 % 5 === 0) {
      return 'Buzz';
    }
    if (arg0 % 3 === 0) {
      return 'Fizz';
    }
    return arg0 + '';
  }
}
