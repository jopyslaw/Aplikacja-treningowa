import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const trainerTypeEndpoint = (router) => {
  /**
   * @swagger
   * tags:
   *   name: TrainerType
   *   description: Moduł API odpowiadający za obsługę typów trenerów
   * /api/trainerType/create:
   *   post:
   *     summary: Dodanie nowego typu trenera
   *     tags: [TrainerType]
   *     responses:
   *       200:
   *         description: Dodaje nowy typ trenera
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: TrainerType
   *   description: Moduł API odpowiadający za obsługę typów trenerów
   * /api/trainerType/get/{id}:
   *   get:
   *     summary: Zwraca dany typ trenera po id
   *     tags: [TrainerType]
   *     responses:
   *       200:
   *         description: Zwraca dany typ trenera
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: TrainerType
   *   description: Moduł API odpowiadający za obsługę typów trenerów
   * /api/trainerType/get:
   *   get:
   *     summary: Zwraca wszystkie typy trenerów
   *     tags: [TrainerType]
   *     responses:
   *       200:
   *         description: Zwraca listę wszystkich typów trenerów
   *       500:
   *         description: Bład serwera
   *
   */
  router.get("/api/trainerType/get", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getTrainerTypeManager()
        .getAllTrainersType();
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  /**
   * @swagger
   * tags:
   *   name: TrainerType
   *   description: Moduł API odpowiadający za obsługę typów trenerów
   * /api/trainerType/remove/{userId}:
   *   delete:
   *     summary: Usunięcie danego typu trenera
   *     tags: [TrainerType]
   *     responses:
   *       200:
   *         description: Usuwa dany typ trenera
   *       500:
   *         description: Bład serwera
   *
   */
  router.delete(
    "/api/trainerType/remove/:id",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getTrainerTypeManager(request)
          .removeById(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default trainerTypeEndpoint;
