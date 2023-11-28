import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const assignedCustomersEndpoint = (router) => {
  router.post(
    "/api/assignedCustomers/create",
    async (request, response, next) => {
      try {
        const result = await businessContainer
          .getAssignedCustomersManager(request)
          .createNewOrUpdate(request.body);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.delete(
    "/api/assignedCustomers/remove/:userId",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getAssignedCustomersManager(request)
          .removeById(request.body.userId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default assignedCustomersEndpoint;
