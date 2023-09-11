import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitizenEntity } from '../../entities/citizens.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CitizenDTO } from '../dto/citizen.dto';
import { ErrorManager } from '../../utils/error.manager';
import { EmployeeEntity } from '../../entities/employee.entity';

@Injectable()
export class CitizensService {
  constructor(
    @InjectRepository(CitizenEntity)
    private readonly citizenRepository: Repository<CitizenEntity>,
  ) {}

  public async addCitizen(body: CitizenDTO): Promise<CitizenEntity> {
    try {
      const result: CitizenEntity = await this.citizenRepository.save(body);
      if(!result) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo guardar el ciudadando, revisa la información'
        })
      }
      return result;

    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findCitizen(): Promise<CitizenEntity[]> {
    try {
      const result: CitizenEntity[] = await this.citizenRepository.find();
      if(!result.length) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontraron ciudadanos en la base de datos'
        })
      }
      return result;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findCitizenById(id: string): Promise<CitizenEntity> {
    try {
      const result: CitizenEntity = await this.citizenRepository
        .createQueryBuilder('citizen')
        .where({ id })
        .leftJoinAndSelect('citizen.employee', 'employee')
        .getOne()
        if(!result) {
          throw new ErrorManager({
            type:'BAD_REQUEST',
            message: 'No se encontró un ciudadano con ese identificador'
          })
        }
          return result;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
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
      if (!result.affected) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No hubo actualización en los datos'
        })
      };
      return result;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async leaveByDeadCitizen(
    id: string,
  ): Promise<DeleteResult | undefined> {
    try {
      const result: DeleteResult = await this.citizenRepository.delete(id);
      if (!result.affected) {
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

  // public async associateEmployee(
  //   id: string,
  //   citizen: CitizenDTO
  // ): Promise<UpdateResult | undefined> {
  //   try {

  //     const result: UpdateResult = await this.citizenRepository.update(
  //       id,
  //       citizen,
  //     );
  //     if (!result.affected) {
  //       throw new ErrorManager({
  //         type:'BAD_REQUEST',
  //         message: 'No hubo actualización en los datos'
  //       })
  //     };
  //     return result;
  //   } catch (error) {
  //     throw ErrorManager.createSignatureError(error.message);
  //   }
  // }
}
