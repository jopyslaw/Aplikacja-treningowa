import customerServiceDAO from "../DAO/customerServiceDAO";

const create = (context) => {
  const createNewOrUpdate = async (applicationData) => {
    const user = await customerServiceDAO.createNewOrUpdate(applicationData);

    if (user) {
      return result;
    }
  };

  const getByCustomerApplicationId = async (id) => {
    const application = await customerServiceDAO.getByCustomerApplicationId(id);

    if (application) {
      return application;
    }
  };

  const removeById = async (id) => {
    return await customerServiceDAO.findByIdAndRemove(id);
  };

  return {
    createNewOrUpdate: createNewOrUpdate,
    getByCustomerApplicationId,
    removeById,
  };
};

export default {
  create: create,
};
