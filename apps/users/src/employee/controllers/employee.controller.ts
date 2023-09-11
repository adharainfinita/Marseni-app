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
import { EmployeeService } from '../services/employee.service';
import { EmployeeDTO } from '../dto/employee.dto';
import { EnterpriseService } from '../../enterprises/services/enterprise.service';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeServices: EmployeeService,
    private readonly enterpriseServices: EnterpriseService,
  ) {}

  @Post('register')
  public async postEmployee(@Body() body: EmployeeDTO) {
    return await this.employeeServices.addEmployee(body);
  }

  @Get('all')
  public async getAllEmployees() {
    return await this.employeeServices.findEmployees();
  }

  @Get(':id')
  public async getEmployeeById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.employeeServices.findEmployeeById(id);
  }

  @Put(':id')
  public async updateEmployee(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: EmployeeDTO,
  ) {
    return await this.employeeServices.updateEmployee(id, body);
  }

  @Delete(':id')
  public async deleteEmployee(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.employeeServices.deleteEmployee(id);
  }

  @Put('')
  public async asociateEnterprise(
    @Param('id') id: string,
    @Param('id', new ParseUUIDPipe()) enterpriseId: string,
  ) {
    const employeesFound =
      await this.employeeServices.findEmployeesByEnterpiseId(enterpriseId);

    const enterpiseFound =
      await this.enterpriseServices.findEnterpriseById(enterpriseId);
    enterpiseFound.employees = employeesFound;

    const employeeFound = await this.employeeServices.findEmployeeById(id);
    employeeFound.enterprise = enterpiseFound;

    await this.employeeServices.updateEmployee(id, employeeFound);
    return await this.enterpriseServices.updateEnterprise(
      enterpriseId,
      enterpiseFound,
    );
  }
}
