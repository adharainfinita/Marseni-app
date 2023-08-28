import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnterpriseEntity } from '../entities/enterprises.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EnterpriseDTO } from '../dto/enterprise.dto';

@Injectable()
export class EnterpriseService {
  constructor(
    @InjectRepository(EnterpriseEntity)
    private readonly enterpriseRepository: Repository<EnterpriseEntity>,
  ) {}

  public async addEnterprise(body: EnterpriseDTO): Promise<EnterpriseEntity> {
    try {
      return await this.enterpriseRepository.save(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findEnterprises(): Promise<EnterpriseEntity[]> {
    try {
      return await this.enterpriseRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findEnterpriseById(id: string): Promise<EnterpriseEntity> {
    try {
      return await this.enterpriseRepository
        .createQueryBuilder('enteprise')
        .where({ id })
        .getOne();
    } catch (error) {
      throw new Error(error);
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
      if (!result.affected) return undefined;
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteEnterprise(id:string): Promise<DeleteResult | undefined> {
    try {
        const result: DeleteResult = await this.enterpriseRepository.delete(id)
        if(!result.affected) return undefined
        return result;
    } catch (error) {
        throw new Error(error)
    }
  }
}
