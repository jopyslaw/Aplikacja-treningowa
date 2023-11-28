import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const trainerTypeEndpoint = (router) => {
  router.post("/api/trainerType/create", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getTrainerTypeManager(request)
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.get("/api/trainerType/get/:id", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getTrainerTypeManager()
        .getByTrainerTypeId(request.params.id);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/trainerType/remove/:userId",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getTrainerTypeManager(request)
          .removeById(request.params.userId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default trainerTypeEndpoint;
