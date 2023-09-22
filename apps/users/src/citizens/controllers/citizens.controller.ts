import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CitizensService } from '../services/citizens.service';
import { CitizenDTO } from '../dto/citizen.dto';
import { EmployeeEntity } from '../../entities/employee.entity';
import { EmployeeService } from '../../employee/services/employee.service';
import { CitizenEntity } from '../../entities/citizens.entity';

@Controller('citizen')
export class CitizensController {
  constructor(
    private readonly citizenServices: CitizensService,
    private readonly employeeServices: EmployeeService,
  ) {}

  @Post('register')
  public async registerCitizen(@Body() body: CitizenDTO) {
    return await this.citizenServices.addCitizen(body);
  }

  @Get('all')
  public async getAllCitizen() {
    return await this.citizenServices.findCitizen();
  }

  @Get(':id')
  public async getCitizenById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.citizenServices.findCitizenById(id);
  }

  @Put(':id')
  public async updateCitizen(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: CitizenDTO,
  ) {
    return await this.citizenServices.updateCitizen(id, body);
  }

  @Delete(':id')
  public async deleteCitizen(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.citizenServices.leaveByDeadCitizen(id);
  }

  @Put(':id/associate-employee/:employeeId')
  public async associateEmployee(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Param('employeeId', new ParseUUIDPipe()) employeeId: string,
  ) {
    const employeeFound: EmployeeEntity =
      await this.employeeServices.findEmployeeById(employeeId);
    const citizen: CitizenEntity =
      await this.citizenServices.findCitizenById(id);

    citizen.employee = employeeFound;
    employeeFound.citizen = citizen;


    
    await this.employeeServices.updateEmployee(employeeId, employeeFound);
    return await this.citizenServices.updateCitizen(id, citizen);
  }
}
