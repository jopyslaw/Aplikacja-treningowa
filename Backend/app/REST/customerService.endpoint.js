import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const customerServiceEndpoint = (router) => {
  router.post(
    "/api/customerService/create",
    async (request, response, next) => {
      try {
        const result = await businessContainer
          .getCustomerServiceManager(request)
          .createNewOrUpdate(request.body);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.get(
    "/api/customerService/get/:id",
    async (request, response, next) => {
      try {
        const result = await businessContainer
          .getCustomerServiceManager()
          .getByCustomerApplicationId(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.delete(
    "/api/customerService/remove/:userId",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getCustomerServiceManager(request)
          .removeById(request.params.userId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default customerServiceEndpoint;
