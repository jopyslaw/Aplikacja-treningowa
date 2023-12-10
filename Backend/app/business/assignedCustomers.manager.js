import assignedCustomersDAO from "../DAO/assignedCustomersDAO";

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
