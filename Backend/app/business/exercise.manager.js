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

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByExecersiseId,
    removeById,
  };
};

export default {
  create: create,
};
