import trainerTypeDAO from "../DAO/trainerTypeDAO";
import businessContainer from "../business/business.container";
import { exercisesArray, trainerTypeArray, trainingArray } from "./mockData";

export const addData = async () => {
  const shouldStart = await businessContainer
    .getExerciseManager()
    .getAllExercises();

  if (shouldStart.length > 0) {
    return;
  }

  const exercises = await businessContainer
    .getExerciseManager()
    .createExercisesFromArray(exercisesArray);

  const trainerTypes = await businessContainer
    .getTrainerTypeManager()
    .createTrainerTypeFromArray(trainerTypeArray);

  const preparedTrainings = trainingArray.map((training) => ({
    title: training.title,
    description: training.description,
    sex: training.sex,
    trainingGoal: training.trainingGoal,
    physicalActivity: training.physicalActivity,
    workType: training.workType,
    trainerTypeId: trainerTypes.find(
      (trainer) => trainer.trainerType === trainerTypeDAO.trainerType.reducing
    )._id,
    excercises: [exercises[0]._id, exercises[1]._id, exercises[2]._id],
  }));

  const trainings = await businessContainer
    .getTrainingManager()
    .createTrainigFromArray(preparedTrainings);
};
