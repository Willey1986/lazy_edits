import { Injectable, Optional, ParseIntPipeOptions, PipeTransform } from '@nestjs/common';

@Injectable()
export class ToIntPipe implements PipeTransform<string> {
  protected exceptionFactory: (error: string) => any;

  constructor(@Optional() options?: ParseIntPipeOptions) {
    options = options || {};
    const {
      exceptionFactory,
    } = options;

    this.exceptionFactory = exceptionFactory;
  }

  /**
   * Method that accesses and performs optional transformation on argument for
   * in-flight requests.
   *
   * @param value currently processed route argument
   * @param metadata contains metadata about the currently processed route argument
   */
  async transform(value: string): Promise<number> {
    const isNumeric =
      ['string', 'number'].includes(typeof value) &&
      !isNaN(parseFloat(value)) &&
      isFinite(value as any);
    if (isNumeric) {
      return parseInt(value, 10);
    }
  }
}
