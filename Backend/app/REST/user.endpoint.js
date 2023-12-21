import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";
import { request, response } from "express";

const userEndpoint = (router) => {
  /**
   * @swagger
   * tags:
   *   name: User
   *   description: Moduł API odpowiadający za operacja na użytkownikach
   * /api/user/auth:
   *   post:
   *     summary: Logowanie do systemu i sprawdzenie danych
   *     tags: [User]
   *     responses:
   *       200:
   *         description: Użytkownik został znaleziony
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: User
   *   description: Moduł API odpowiadający za operacja na użytkownikach
   * /api/user/create:
   *   post:
   *     summary: Dodanie nowego użytkownika
   *     tags: [User]
   *     responses:
   *       200:
   *         description: Nowy użytkownik został dodany
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: User
   *   description: Moduł API odpowiadający za operacja na użytkownikach
   * /api/user/logout/{userId}:
   *   delete:
   *     summary: Wylogowanie uzytkownika
   *     tags: [User]
   *     responses:
   *       200:
   *         description: Użytkownik został wylogowany
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: User
   *   description: Moduł API odpowiadający za operacja na użytkownikach
   * /api/user/remove/{userId}:
   *   delete:
   *     summary: Usunięcie konta użytkownika
   *     tags: [User]
   *     responses:
   *       200:
   *         description: Konto użtykownika zostało usunięte
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: User
   *   description: Moduł API odpowiadający za operacja na użytkownikach
   * /api/user/get-trainers-by-trainer-type:
   *   get:
   *     summary: Zwrócenie trenerów odpowiadającym preferencją użytkownika
   *     tags: [User]
   *     responses:
   *       200:
   *         description: Konto użtykownika zostało usunięte
   *       500:
   *         description: Bład serwera
   *
   */
  router.get(
    "/api/user/get-trainers-by-trainer-type",
    //auth,
    async (request, response, next) => {
      try {
        const result = await businessContainer
          .getUserManager(request)
          .getTrainersByTrainerType(request.query.goal);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default userEndpoint;
