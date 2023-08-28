import { Column, Entity, OneToOne } from "typeorm";
import { ICitizen } from "../../interfaces/citizen.interface";
import { BaseEntity } from "../../config/base.entity";
import { EmployeeEntity } from "../../employee/entities/employee.entity";
import { JOBSTATUS, PRONOUMS } from "../../constants/enums";

@Entity({ name: 'citizens' })
export class CitizenEntity extends BaseEntity implements ICitizen {
    @Column()
  firstName: string;
    @Column()
  lastName: string;
    @Column( { unique: true })
  dni: number;
    @Column()
  dateBirth: Date;
    @Column({ unique: true })
  email: string;
    @Column()
  principalAdress: string;
    @Column()
  cuil: string;
    @Column()
  pronoums: PRONOUMS;
    @Column()
  jobStatus: JOBSTATUS;
  @OneToOne(()=> EmployeeEntity, employee => employee.citizen)
  employee: EmployeeEntity;
}