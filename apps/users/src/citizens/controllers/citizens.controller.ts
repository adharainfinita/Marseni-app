import { Body, Controller, Get, Post } from '@nestjs/common';
import { CitizensService } from '../services/citizens.service';
import { CitizenDTO } from '../dto/citizen.dto';

@Controller('citizen')
export class CitizensController {
  constructor(private readonly citizenServices: CitizensService){}

  @Post('register')
  public async registerCitizen(@Body() body: CitizenDTO){
    return await this.citizenServices.addCitizen(body);
  }

  @Get('all')
  public async getAllCitizen() {
    return await this.citizenServices.findCitizen();
  }
}
