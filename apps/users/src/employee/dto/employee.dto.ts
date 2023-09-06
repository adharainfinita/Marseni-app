import { IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class EmployeeDTO {

  @IsNumberString()
  @IsNotEmpty()
  nss: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  enterpriseId: string;

  @IsNumber()
  salaryAmount: number;
}