import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Get('one')
  public async getCitizenById(@Param() id: string) {
   return await this.citizenServices.findCitizenById(id);
  }

  @Put('one')
  public async updateCitizen(@Param() id: string, @Body() body: CitizenDTO){
    return await this.citizenServices.updateCitizen(id, body);
  }

  @Delete('one')
  public async deleteCitizen(@Param() id:string) {
    return await this.citizenServices.leaveByDeadCitizen(id);
  }
}
