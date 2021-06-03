import { Module, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductModule} from './products/product.module';
import { CatModule } from './cat/cat.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './user/pipes/validation.pipe';
import { CakeModule } from './cake/cake.module';
import { logger, LoggerMiddleware } from './common/middleware/logger.middleware';
import { CakeController } from './cake/cake.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { HttpErrorFilter } from './Shared/404.fiter';

@Module({
  imports: [ProductModule, CatModule, UserModule, MongooseModule.forRoot('mongodb://localhost/Learn_MongoDB'), CakeModule, AuthModule, UsersModule,],
  //imports: [ProductModule, CatModule, UserModule, MongooseModule.forRoot('mongodb+srv://QLUser:lgkhhn2000@cluster0.jv8nl.mongodb.net/User?retryWrites=true&w=majority'),],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude(
        {path: 'cake', method: RequestMethod.GET},
        {path: 'cake', method: RequestMethod.POST},
        'cake/(.*)',
      )
      .forRoutes(CakeController);
  }
}
