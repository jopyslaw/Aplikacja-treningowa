import assignedCustomersDAO from "../DAO/assignedCustomersDAO";
import applicationException from "../service/applicationException";
import sha1 from "sha1";

const create = (context) => {
  const createNewOrUpdate = async (userData) => {
    const user = await assignedCustomersDAO.createNewOrUpdate(userData);

    if (user) {
      return result;
    }
  };

  const getByUserId = async (id) => {
    const user = await assignedCustomersDAO.getByUserId(id);

    if (user) {
      return user;
    }
  };

  const getByTrainerId = async (id) => {
    const user = await assignedCustomersDAO.getByTrainerId(id);

    if (user) {
      return user;
    }
  };

  const removeById = async (id) => {
    return await assignedCustomersDAO.findByIdAndRemove(id);
  };

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByTrainerId,
    getByUserId,
    removeById,
  };
};

export default {
  create: create,
};
