import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EnterpriseService } from '../services/enterprise.service';
import { EnterpriseDTO } from '../dto/enterprise.dto';

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseController: EnterpriseService) {}

  @Post('register')
  public async postEnterprise(@Body() body: EnterpriseDTO) {
    return await this.enterpriseController.addEnterprise(body);
  }

  @Get('all')
  public async getAllEnterprise() {
    return await this.enterpriseController.findEnterprises();
  }

  @Get('one')
  public async getEnterpriseById(@Param() id: string) {
    return await this.enterpriseController.findEnterpriseById(id);
  }

  @Put('one')
  public async updateEnterprise(
    @Param() id: string,
    @Body() body: EnterpriseDTO,
  ) {
    return await this.enterpriseController.updateEnterprise(id, body);
  }

  @Delete('one')
  public async deleteEnterprise(@Param() id: string) {
    return await this.enterpriseController.deleteEnterprise(id);
  }
}
