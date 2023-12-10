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

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByTrainingId,
    removeById,
  };
};

export default {
  create: create,
};
