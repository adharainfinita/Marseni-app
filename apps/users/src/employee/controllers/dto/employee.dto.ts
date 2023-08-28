import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EmployeeDTO {

    @IsNotEmpty()
    @IsString()
    nss: string;

    @IsString()
    fistName?: string;

    @IsString()
    lastName?: string;
    
    @IsString()
    @IsNotEmpty()
    enterpriseId: string;

    @IsNumber()
    salaryAmount: number;
}