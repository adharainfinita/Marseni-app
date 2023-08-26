import { Controller, Get } from '@nestjs/common';
import { CitizensService } from '../services/citizens.service';

@Controller('citizens')
export class CitizensController {
  constructor(private readonly citizenServices: CitizensService){}
  @Get()
  getHello(): string {
    return this.citizenServices.getHello();
  }
}
