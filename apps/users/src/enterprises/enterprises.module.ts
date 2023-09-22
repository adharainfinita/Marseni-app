import { Module } from '@nestjs/common';
import { EnterpriseService } from './services/enterprise.service';
import { EnterpriseController } from './controllers/enterprises.controller';
import { EnterpriseEntity } from '../entities/enterprises.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([EnterpriseEntity])
  ],
  providers: [EnterpriseService],
  controllers: [EnterpriseController],
  exports: [EnterpriseService]
})
export class EnterprisesModule {}
