import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { IEnterprise } from "../interfaces/enterprise.interface";
import { BaseEntity } from "../config/base.entity";
import { EmployeeEntity } from "./employee.entity";

@Entity({ name: 'enterprise' })
export class EnterpriseEntity extends BaseEntity implements IEnterprise {
  @Column()
  nameOrganization: string;
  @Column({ unique: true })
  cuit: string;
  @Column()
  typeService: string;
  @Column()
  ceoId: string;
 @OneToMany(()=> EmployeeEntity, employee => employee.enterprise)
 @JoinColumn({name: 'employees_id'})
  employees: EmployeeEntity[]
}