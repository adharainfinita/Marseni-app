import { Module } from '@nestjs/common';
import { EnterpriseService } from './services/enterprise.service';
import { EnterpriseController } from './controllers/enterprises.controller';

@Module({
  providers: [EnterpriseService],
  controllers: [EnterpriseController]
})
export class EnterprisesModule {}
