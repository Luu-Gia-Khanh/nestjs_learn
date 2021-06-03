import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
   getPost(id: string): string {
     return `hello popst:${id}`;
   }
}
