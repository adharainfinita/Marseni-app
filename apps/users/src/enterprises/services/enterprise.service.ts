import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnterpriseEntity } from '../../entities/enterprises.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EnterpriseDTO } from '../dto/enterprise.dto';
import { ErrorManager } from '../../utils/error.manager';

@Injectable()
export class EnterpriseService {
  constructor(
    @InjectRepository(EnterpriseEntity)
    private readonly enterpriseRepository: Repository<EnterpriseEntity>,
  ) {}

  public async addEnterprise(body: EnterpriseDTO): Promise<EnterpriseEntity> {
    try {
      const result:EnterpriseEntity = await this.enterpriseRepository.save(body);
      if(!result){
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo guardar al nuevo empleado, revisa la información'
        })
      };
      return result;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message);
    }
  }

  public async findEnterprises(): Promise<EnterpriseEntity[]> {
    try {
      const result:EnterpriseEntity[] = await this.enterpriseRepository.find();
      if(!result){
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontraron empresas en la base de datos'
        });
      };
      return result;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message);
    }
  }

  public async findEnterpriseById(id: string): Promise<EnterpriseEntity> {
    try {
      const result:EnterpriseEntity = await this.enterpriseRepository
        .createQueryBuilder('enteprise')
        .where({ id })
        .getOne();
        if(!result){
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: 'No se encontró una empresa con ese identificador'
          })
        };
        return result;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateEnterprise(
    id: string,
    body: EnterpriseDTO,
  ): Promise<UpdateResult | undefined> {
    try {
      const result: UpdateResult = await this.enterpriseRepository.update(
        id,
        body,
      );
      if (!result.affected) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No hubo actualización en los datos'
        })
      };
      return result;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteEnterprise(id:string): Promise<DeleteResult | undefined> {
    try {
        const result: DeleteResult = await this.enterpriseRepository.delete(id)
        if(!result.affected) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message: 'No se encontró que eliminar'
          })
        };
        return result;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message);
    }
  }
}
