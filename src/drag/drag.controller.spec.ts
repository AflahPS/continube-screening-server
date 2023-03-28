import { Test, TestingModule } from '@nestjs/testing';
import { DragController } from './drag.controller';

describe('DragController', () => {
  let controller: DragController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DragController],
    }).compile();

    controller = module.get<DragController>(DragController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
