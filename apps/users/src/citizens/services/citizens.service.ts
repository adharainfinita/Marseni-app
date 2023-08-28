import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitizenEntity } from '../entities/citizens.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CitizenDTO } from '../dto/citizen.dto';

@Injectable()
export class CitizensService {
  constructor(
    @InjectRepository(CitizenEntity)
    private readonly citizenRepository: Repository<CitizenEntity>,
  ) {}

  public async addCitizen(body: CitizenDTO): Promise<CitizenEntity> {
    try {
      return await this.citizenRepository.save(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findCitizen(): Promise<CitizenEntity[]> {
    try {
      return await this.citizenRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findCitizenById(id: string): Promise<CitizenEntity> {
    try {
      return await this.citizenRepository
        .createQueryBuilder('citizen')
        .where({ id })
        .getOne();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateCitizen(
    id: string,
    body: CitizenDTO,
  ): Promise<UpdateResult | undefined> {
    try {
      const result: UpdateResult = await this.citizenRepository.update(
        id,
        body,
      );
      if (!result.affected) return undefined;

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async leaveByDeadCitizen(
    id: string,
  ): Promise<DeleteResult | undefined> {
    try {
      const result: DeleteResult = await this.citizenRepository.delete(id);
      if (!result.affected) return undefined;

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
