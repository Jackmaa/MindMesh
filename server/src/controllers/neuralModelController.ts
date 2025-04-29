import { Request, Response } from "express";
import { NeuralModel } from "../models/NeuralModel";

//➔ Create a new model
// This function creates a new neural model based on the request body and saves it to the database.
// It also initializes the loss history as an empty array.
export async function createModel(req: Request, res: Response) {
  try {
    const { name, dataset, structure, learningRate } = req.body;

    const newModel = new NeuralModel({
      name,
      dataset,
      structure,
      learningRate,
      lossHistory: [],
    });

    const savedModel = await newModel.save();

    res.status(201).json(savedModel);
  } catch (error) {
    console.error("Error creating model:", error);

    res.status(500).json({ message: "Internal server error" });
  }
}

// ➔  Get all models
// This function retrieves all neural models from the database and returns them as a JSON response.
export async function getAllModels(req: Request, res: Response) {
  try {
    const models = await NeuralModel.find().sort({ createdAt: -1 });
    res.json(models);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la récupération des modèles." });
  }
}
