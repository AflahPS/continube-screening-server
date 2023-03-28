import { Module } from '@nestjs/common';
import { DragService } from './drag.service';
import { DragController } from './drag.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { dragObjectSchema } from './object.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DragObject', schema: dragObjectSchema },
    ]),
  ],
  providers: [DragService],
  controllers: [DragController],
})
export class DragModule {}
