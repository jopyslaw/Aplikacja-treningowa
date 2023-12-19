import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";
import { request, response } from "express";

const userEndpoint = (router) => {
  router.post("/api/user/auth", async (request, response, next) => {
    try {
      let result = await businessContainer
        .getUserManager(request)
        .authenticate(request.body.login, request.body.password);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.post("/api/user/create", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getUserManager(request)
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/user/logout/:userId",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getUserManager(request)
          .removeHashSession(request.body.userId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.delete(
    "/api/user/remove/:userId",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getUserManager(request)
          .removeById(request.params.userId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.get(
    "/api/user/get-trainers-by-trainer-type",
    auth,
    async (request, response, next) => {
      try {
        const result = await businessContainer
          .getUserManager(request)
          .getTrainersByTrainerType(request.queryParams.goal);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default userEndpoint;
