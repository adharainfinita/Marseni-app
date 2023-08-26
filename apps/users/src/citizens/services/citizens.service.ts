import { Injectable } from '@nestjs/common';

@Injectable()
export class CitizensService {
  getHello(): string {
    return 'Hello cititizens!';
  }
}
