import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const trainingEndpoint = (router) => {
  /**
   * @swagger
   * tags:
   *   name: Training
   *   description: Moduł API odpowiadający za obsługę trenningów
   * /api/training/create:
   *   post:
   *     summary: Dodanie nowego trenningu
   *     tags: [Training]
   *     responses:
   *       200:
   *         description: Dodaje nowy trenning
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: Training
   *   description: Moduł API odpowiadający za obsługę trenningów
   * /api/training/get/{id}:
   *   get:
   *     summary: Zwraca dany trenning po id
   *     tags: [Training]
   *     responses:
   *       200:
   *         description: Zwrócenie danego trenningu
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: Training
   *   description: Moduł API odpowiadający za obsługę trenningów
   * /api/training/remove/{id}:
   *   delete:
   *     summary: Usunięcie danego trennigu
   *     tags: [Training]
   *     responses:
   *       200:
   *         description: Dany trennig został usunięty
   *       500:
   *         description: Bład serwera
   *
   */
  router.delete(
    "/api/training/remove/:id",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getTrainingManager(request)
          .removeById(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default trainingEndpoint;
