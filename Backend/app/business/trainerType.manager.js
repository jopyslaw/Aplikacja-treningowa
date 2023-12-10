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

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByTrainerTypeId,
    removeById,
  };
};

export default {
  create: create,
};
