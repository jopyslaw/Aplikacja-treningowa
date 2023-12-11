import exerciseDAO from "../DAO/exerciseDAO";

const create = (context) => {
  const createNewOrUpdate = async (exerciseData) => {
    const user = await exerciseDAO.createNewOrUpdate(exerciseData);

    if (user) {
      return result;
    }
  };

  const getByExecersiseId = async (id) => {
    const exercise = await exerciseDAO.getByExerciseId(id);

    if (exercise) {
      return exercise;
    }
  };

  const removeById = async (id) => {
    return await exerciseDAO.findByIdAndRemove(id);
  };

  const createExercisesFromArray = async (exercisesArray) => {
    const result = await exerciseDAO.creatExcersiseFromArray(exercisesArray);
    if (result) {
      return result;
    }
  };

  const getAllExercises = async () => {
    const result = await exerciseDAO.getAllExercises();
    if (result) {
      return result;
    }
  };

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByExecersiseId,
    removeById,
    createExercisesFromArray,
    getAllExercises,
  };
};

export default {
  create: create,
};
