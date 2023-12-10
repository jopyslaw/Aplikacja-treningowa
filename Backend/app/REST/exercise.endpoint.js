import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const exerciseEndpoint = (router) => {
  router.post("/api/exercise/create", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getExerciseManager(request)
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.get("/api/exercise/get/:id", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getExerciseManager()
        .getByExerciseId(request.params.id);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/exercise/remove/:userId",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getExerciseManager(request)
          .removeById(request.params.userId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default exerciseEndpoint;
