import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { DragService } from './drag.service';

@Controller('drag')
export class DragController {
  constructor(private readonly dragService: DragService) {}

  @Get()
  async getData() {
    return this.dragService.getData();
  }

  @Post()
  async newData(@Body() body) {
    console.log(body);

    return this.dragService.addData(body);
  }

  @Delete()
  async deleteAll() {
    return this.dragService.deleteAll();
  }
}
