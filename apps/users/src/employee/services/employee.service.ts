import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from '../../entities/employee.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EmployeeDTO } from '../dto/employee.dto';
import { ErrorManager } from '../../utils/error.manager';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
  public async addEmployee(body: EmployeeDTO): Promise<EmployeeEntity> {
    try {
      const result:EmployeeEntity = await this.employeeRepository.save(body);
      if(!result){
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo guardar al nuevo empleado, revisa la información'
        })
      };
      return result;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findEmployees(): Promise<EmployeeEntity[]> {
    try {
      const result:EmployeeEntity[] = await this.employeeRepository.find();
      if(!result){
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontraron empleados en la base de datos'
        });
      }
      return result;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findEmployeeById(id: string): Promise<EmployeeEntity> {
    try {
      const result:EmployeeEntity = await this.employeeRepository
      .createQueryBuilder()
      .where({id})
      .getOne()
      if(!result){
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró un empleado con ese identificador'
        })
      };
      return result;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateEmployee(id:string, body:EmployeeDTO): Promise<UpdateResult | undefined> {
    try {
      const result: UpdateResult = await this.employeeRepository.update(id, body)
      if(!result.affected) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No hubo actualización en los datos'
        })
      };
      return result;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteEmployee(id:string): Promise<DeleteResult | undefined> {
    try {
      const result: DeleteResult = await this.employeeRepository.delete(id)
      if(!result.affected) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontró que eliminar'
        })
      };
      return result;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
