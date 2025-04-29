import mongoose, { Schema, Document } from "mongoose";

export interface INeuralModel extends Document {
  name: string;
  dataset: string;
  structure: number[];
  learningRate: number;
  lossHistory: number[];
  createdAt: Date;
}

const NeuralModelSchema: Schema = new Schema({
  name: { type: String, required: true },
  dataset: { type: String, required: true },
  structure: { type: [Number], required: true },
  learningRate: { type: Number, required: true },
  lossHistory: { type: [Number], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export const NeuralModel = mongoose.model<INeuralModel>(
  "NeuralModel",
  NeuralModelSchema
);
