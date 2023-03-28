import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DragObject } from './object.model';

@Injectable()
export class DragService {
  constructor(
    @InjectModel('DragObject')
    private readonly dragObjectModel: Model<DragObject>,
  ) {}

  async getData() {
    const source = await this.dragObjectModel.find({ category: 'source' });
    const target = await this.dragObjectModel.find({ category: 'target' });

    return {
      object1: source.map((el) => el.text),
      object2: target.map((el) => el.text),
    };
  }

  async addData(dto: any) {
    const prepData = new this.dragObjectModel(dto);
    const added = await prepData.save();
    return { status: 'success', object: added };
  }

  async deleteAll() {
    const res = await this.dragObjectModel.deleteMany();
    if (res) return { status: 'success' };
  }
}
