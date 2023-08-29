import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { IEmployee } from "../interfaces/employee.interface";
import { EnterpriseEntity } from "./enterprises.entity";
import { CitizenEntity } from "./citizens.entity";

@Entity({ name: 'employee' })
export class EmployeeEntity extends BaseEntity implements IEmployee {
  @Column()
  nss: string;
  @Column()
  fistName?: string;
  @Column()
  lastName?: string;
  @Column()
  enterpriseId: string;
  @Column()
  salaryAmount: number;
  @OneToOne(()=> CitizenEntity, citizen => citizen.employee)
  citizen: CitizenEntity;
  @OneToMany(()=> EnterpriseEntity, enterprise => enterprise.employees)
  enterprise: EnterpriseEntity;
}