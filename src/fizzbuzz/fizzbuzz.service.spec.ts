import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Fizz test', () => {
    expect(service.validate(3)).toBe('Fizz');
    expect(service.validate(9)).toBe('Fizz');
    expect(service.validate(99)).toBe('Fizz');
  });

  it('Buzz test', () => {
    expect(service.validate(5)).toBe('Buzz');
    expect(service.validate(50)).toBe('Buzz');
    expect(service.validate(5000)).toBe('Buzz');
  });

  it('FizzBuzz test', () => {
    expect(service.validate(15)).toBe('FizzBuzz');
    expect(service.validate(45)).toBe('FizzBuzz');
    expect(service.validate(150000)).toBe('FizzBuzz');
  });

  it('othercase test', () => {
    expect(service.validate(2)).toBe('2');
    expect(service.validate(11)).toBe('11');
    expect(service.validate(17)).toBe('17');
  });
});
