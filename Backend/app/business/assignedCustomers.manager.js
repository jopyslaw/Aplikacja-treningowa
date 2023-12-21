import assignedCustomersDAO from "../DAO/assignedCustomersDAO";
import userDAO from "../DAO/userDAO";

const create = (context) => {
  const createNewOrUpdate = async (assignedCustomerData) => {
    const assignedCustomer = await assignedCustomersDAO.createNewOrUpdate(
      assignedCustomerData
    );

    if (assignedCustomer) {
      return assignedCustomer;
    }
  };

  const getByUserId = async (id) => {
    const assignedCustomer = await assignedCustomersDAO.getByUserId(id);

    if (assignedCustomer) {
      return assignedCustomer;
    }
  };

  const getByTrainerId = async (id) => {
    const assignedCustomer = await assignedCustomersDAO.getByTrainerId(id);

    if (assignedCustomer) {
      return assignedCustomer;
    }
  };

  const removeById = async (id) => {
    return await assignedCustomersDAO.removeById(id);
  };

  const suspendCooperation = async (id) => {
    return await assignedCustomersDAO.suspendCooperation(id);
  };

  const getAssignedUsersForTrainer = async (id) => {
    const assignedUsers =
      await assignedCustomersDAO.getAssignedCustomersToTrainer(id);

    const result = await Promise.all(
      assignedUsers.map(async (user) => await userDAO.get(user.userId))
    );

    return result;
  };

  const getAssignedTrainersForUser = async (id) => {
    const assignedUsers = await assignedCustomersDAO.getAssignedTrainersToUser(
      id
    );

    const result = await Promise.all(
      assignedUsers.map(async (user) => await userDAO.get(user.userId))
    );

    return result;
  };

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByTrainerId,
    getByUserId,
    removeById,
    suspendCooperation,
    getAssignedUsersForTrainer,
    getAssignedTrainersForUser,
  };
};

export default {
  create: create,
};
