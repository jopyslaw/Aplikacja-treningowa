import trainerTypeDAO from "../DAO/trainerTypeDAO";

const create = (context) => {
  const createNewOrUpdate = async (trainerType) => {
    const trainerTypeData = await trainerTypeDAO.createNewOrUpdate(trainerType);

    if (trainerTypeData) {
      return trainerTypeData;
    }
  };

  const getByTrainerTypeId = async (id) => {
    const trainerType = await trainerTypeDAO.getByTrainerTypeId(id);

    if (trainerType) {
      return trainerType;
    }
  };

  const removeById = async (id) => {
    return await trainerTypeDAO.findByIdAndRemove(id);
  };

  const createTrainerTypeFromArray = async (trainierTypeArray) => {
    const result = await trainerTypeDAO.createTrainerTypeArray(
      trainierTypeArray
    );
    if (result) {
      return result;
    }
  };

  const getAllTrainersType = async () => {
    const result = await trainerTypeDAO.getAllTrainerTypes();
    if (result) {
      return result;
    }
  };

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByTrainerTypeId,
    removeById,
    getAllTrainersType,
    createTrainerTypeFromArray,
  };
};

export default {
  create: create,
};
