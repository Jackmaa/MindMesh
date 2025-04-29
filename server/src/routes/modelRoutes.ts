import { Router } from "express";
import { NeuralModel } from "../models/NeuralModel";
import {
  createModel,
  getAllModels,
} from "../controllers/neuralModelController";

const router = Router();

// ➔ Route to create a new model

router.post("/", createModel);

// ➔ Route to get all models

router.get("/", getAllModels);

export default router;
