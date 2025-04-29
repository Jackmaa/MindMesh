// ➔ Import de tout TensorFlow.js sous l'alias `tf`
import * as tf from "@tensorflow/tfjs";

// ➔ Définition d'une interface TypeScript pour typer la configuration d'entraînement
interface TrainingConfig {
  dataset: "XOR" | "AND" | "OR" | "SIN"; // Quel jeu de données utiliser
  structure: number[]; // Architecture du réseau, ex: [4, 2, 1] pour 2 couches cachées
  learningRate: number; // Taux d'apprentissage pour l'optimiseur
  epochs: number; // Nombre de passages sur tout le dataset
  onEpochEnd?: (epoch: number, logs: tf.Logs | undefined) => void; // Callback optionnel pour chaque epoch
}

// ➔ Définition manuelle des datasets utilisés pour entraîner le modèle
const datasets = {
  XOR: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    outputs: [[0], [1], [1], [0]], // sortie XOR classique
  },
  AND: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    outputs: [[0], [0], [0], [1]], // sortie AND classique
  },
  OR: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    outputs: [[0], [1], [1], [1]], // sortie OR classique
  },
  SIN: {
    inputs: Array.from({ length: 100 }, (_, i) => [i * 0.1]),
    // Génère 100 points entre 0 et 10, espacés de 0.1
    outputs: Array.from({ length: 100 }, (_, i) => [Math.sin(i * 0.1)]),
    // Leur sinus associé
  },
};

// ➔ Fonction principale exportée pour entraîner un modèle
export async function trainModel(config: TrainingConfig) {
  // ➔ Déstructure la config passée en argument
  const { dataset, structure, learningRate, epochs } = config;

  // ➔ Récupère les données correspondantes
  const data = datasets[dataset];

  // ➔ Vérification de la validité du dataset
  if (!data) {
    throw new Error(`Dataset ${dataset} not found`);
    // ➔ Arrête tout si dataset invalide
  }

  // ➔ Crée un nouveau modèle séquentiel vide
  const model = tf.sequential();

  // ➔ Ajoute les couches au modèle selon la structure fournie
  structure.forEach((units, index) => {
    model.add(
      tf.layers.dense({
        units, // ➔ Nombre de neurones de la couche
        activation: "sigmoid", // ➔ Fonction d'activation utilisée
        inputShape: index === 0 ? [data.inputs[0].length] : undefined,
        // ➔ inputShape seulement pour la première couche (obligatoire)
      })
    );
  });

  // ➔ Compile le modèle : définit l'optimiseur et la fonction de perte
  model.compile({
    optimizer: tf.train.sgd(learningRate), // ➔ Stochastic Gradient Descent avec taux d'apprentissage donné
    loss: "meanSquaredError", // ➔ Perte utilisée : erreur quadratique moyenne
  });

  // ➔ Initialisation d'un tableau pour stocker la perte à chaque epoch
  const lossHistory: number[] = [];

  // ➔ Entraîne le modèle dans un contexte `tf.tidy` pour gérer la mémoire
  // ➔ tf.tidy permet de libérer la mémoire des Tensors non utilisés
  const { xs, ys } = tf.tidy(() => {
    return {
      xs: tf.tensor2d(data.inputs), // ➔ Crée un Tensor 2D pour les entrées
      ys: tf.tensor2d(data.outputs), // ➔ Crée un Tensor 2D pour les sorties
    };
  });

  try {
    // ➔ Lance l'entraînement du modèle
    await model.fit(xs, ys, {
      epochs, // ➔ Nombre d'epochs à effectuer
      callbacks: {
        // ➔ Callback déclenché à la fin de chaque epoch
        onEpochEnd: async (epoch: number, logs: tf.Logs | undefined) => {
          const loss = logs?.loss ?? 0; // ➔ Récupère la perte courante
          config.onEpochEnd?.(epoch, logs); // ➔ Appelle le callback si défini
          console.log(
            `Epoch ${epoch + 1}/${epochs} - Loss: ${loss.toFixed(5)}`
          );
          // ➔ Affiche la perte actuelle dans la console
          lossHistory.push(loss); // ➔ Stocke la perte pour analyse ultérieure
        },
      },
    });
  } finally {
    xs.dispose(); // ➔ Libère la mémoire du Tensor d'entrées
    ys.dispose(); // ➔ Libère la mémoire du Tensor de sorties
  }
  // ➔ Récupère les poids finaux du modèle sous forme de tableaux JS
  const weights = serializeWeights(model);
  // ➔ .map(w => w.arraySync()) transforme les Tensors en arrays pour être plus facilement exploités/sauvés

  // ➔ Retourne un objet contenant l'historique des pertes et les poids finaux
  return { lossHistory, weights };
}

type TensorWeights = number | number[] | number[][] | number[][][];

function serializeWeights(model: tf.LayersModel): TensorWeights[] {
  return model.getWeights().map((w) => w.arraySync() as TensorWeights);
}
