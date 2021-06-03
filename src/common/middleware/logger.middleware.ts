import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Controller, Get, Post, Body, Patch, Delete, Req } from '@nestjs/common';
import { CakeService } from 'src/cake/cake.service';
import { CreateCakeDto } from 'src/cake/dto/create-cake.dto';



@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(private readonly cakeService: CakeService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Request IP'+ req.ip);
    console.log('Request PATH'+ req.path);
    next();
  }
}
export function logger(req: Request, res: Response, next: NextFunction){
    
    console.log('Request PATH'+ req.path);
    next();
}