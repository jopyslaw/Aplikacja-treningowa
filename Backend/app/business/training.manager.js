import trainingDAO from "../DAO/trainingDAO";

const create = (context) => {
  const createNewOrUpdate = async (trainingData) => {
    const user = await trainingDAO.createNewOrUpdate(trainingData);

    if (user) {
      return result;
    }
  };

  const getByTrainingId = async (id) => {
    const user = await trainingDAO.getByTrainingId(id);

    if (user) {
      return user;
    }
  };

  const removeById = async (id) => {
    return await trainingDAO.findByIdAndRemove(id);
  };

  const createTrainigFromArray = async (trainingArray) => {
    const result = await trainingDAO.createTraningFromArray(trainingArray);
    if (result) {
      return result;
    }
  };

  const getAllTrainings = async () => {
    const result = await trainingDAO.getAllTrainings();
    if (result) {
      return result;
    }
  };

  const getTrainingsByTrainerTypeId = async (id) => {
    const result = await trainingDAO.getTrainingsByTrainerTypeId(id);

    return result;
  };

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByTrainingId,
    removeById,
    createTrainigFromArray,
    getAllTrainings,
    getTrainingsByTrainerTypeId,
  };
};

export default {
  create: create,
};
