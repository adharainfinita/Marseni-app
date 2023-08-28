import { Contains, IsNotEmpty, IsString } from "class-validator";

export class EnterpriseDTO {
    @IsNotEmpty()
    @IsString()
    nameOrganization: string;

    @IsNotEmpty()
    @Contains('-')
    @IsString()
    cuit: string;
  
    @IsString()
    typeService: string;
    
    @IsNotEmpty()
    @IsString()
    ceoId: string;
}
