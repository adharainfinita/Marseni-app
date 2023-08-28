import { Module } from '@nestjs/common';
import { CitizensService } from './services/citizens.service';
import { CitizensController } from './controllers/citizens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizenEntity } from './entities/citizens.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CitizenEntity])
  ],
  providers: [CitizensService],
  controllers: [CitizensController]
})
export class CitizensModule {}
