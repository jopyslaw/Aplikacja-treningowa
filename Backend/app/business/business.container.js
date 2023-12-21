import assignedCustomersManager from "./assignedCustomers.manager";
import userManager from "./user.manager";
import customerServiceManager from "./customerService.manager";
import exerciseManger from "./exercise.manager";
import trainerTypeManager from "./trainerType.manager";
import trainingManager from "./training.manager";

function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
  getUserManager: getter(userManager),
  getAssignedCustomersManager: getter(assignedCustomersManager),
  getCustomerServiceManager: getter(customerServiceManager),
  getExerciseManager: getter(exerciseManger),
  getTrainerTypeManager: getter(trainerTypeManager),
  getTrainingManager: getter(trainingManager),
};
