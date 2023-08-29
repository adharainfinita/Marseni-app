import { IsString, IsNotEmpty, IsNumber, IsDate, IsEmail, Contains, IsEnum } from "class-validator";
import { JOBSTATUS, PRONOUMS } from "../../constants/enums";

export class CitizenDTO {

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  dni: number;

  @IsNotEmpty()
  @IsDate()
  dateBirth: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  principalAddress: string;

  @IsNotEmpty()
  @Contains('-')
  cuil: string;

  @IsEnum(PRONOUMS)
  pronoums: PRONOUMS;

  @IsEnum(JOBSTATUS)
  jobStatus: JOBSTATUS;
}