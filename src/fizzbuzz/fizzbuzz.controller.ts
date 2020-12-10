import { FizzbuzzService } from './fizzbuzz.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('fizzbuzz')
export class FizzbuzzController {
  constructor(private readonly service: FizzbuzzService) {}

  @Get('validate/:variable')
  validate(@Param('variable') variable: number) {
    return this.service.validate(variable);
  }
}
