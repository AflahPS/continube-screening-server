import * as mongoose from 'mongoose';

export const dragObjectSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['source', 'target'],
    },
  },
  { timestamps: true },
);

export interface DragObject extends mongoose.Document {
  text: string;
  category: 'source' | 'target';
}
