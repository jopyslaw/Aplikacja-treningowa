import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const trainingEndpoint = (router) => {
  router.post("/api/training/create", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getTrainingManager(request)
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.get("/api/training/get/:id", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getTrainingManager()
        .getByTrainingId(request.params.id);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/training/remove/:userId",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getTrainingManager(request)
          .removeById(request.params.userId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default trainingEndpoint;
