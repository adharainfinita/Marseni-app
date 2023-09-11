import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { IEmployee } from "../interfaces/employee.interface";
import { EnterpriseEntity } from "./enterprises.entity";
import { CitizenEntity } from "./citizens.entity";

@Entity({ name: 'employee' })
export class EmployeeEntity extends BaseEntity implements IEmployee {
  @Column()
  nss: string;
  @Column()
  firstName?: string;
  @Column()
  lastName?: string;
  @Column()
  salaryAmount: number;
@OneToOne(()=> CitizenEntity, citizen => citizen.employee)
@JoinColumn({name: 'employee_id'})
  citizen: CitizenEntity;
  @OneToMany(()=> EnterpriseEntity, enterprise => enterprise.employees)
  @JoinColumn({name:'enterpise_id'})
  enterprise: EnterpriseEntity;
}