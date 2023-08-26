import { Module } from '@nestjs/common';
import { CitizensService } from './services/citizens.service';

@Module({
  providers: [CitizensService]
})
export class CitizensModule {}
