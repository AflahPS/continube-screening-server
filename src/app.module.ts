import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DragModule } from './drag/drag.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DragModule,
    MongooseModule.forRoot('mongodb://localhost:27017/drag'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
