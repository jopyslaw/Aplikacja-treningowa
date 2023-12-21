import customerServiceEndpoint from "./customerService.endpoint";
import assignedCustomersEndpoint from "./assignedCustomers.endpoint";
import userEndpoint from "./user.endpoint";
import exerciseEndpoint from "./exercise.endpoint";
import trainerTypeEndpoint from "./trainerType.endpoint";
import trainingEndpoint from "./training.endpoint";

const routes = (router) => {
  userEndpoint(router);
  customerServiceEndpoint(router);
  assignedCustomersEndpoint(router);
  exerciseEndpoint(router);
  trainerTypeEndpoint(router);
  trainingEndpoint(router);
};

export default routes;
