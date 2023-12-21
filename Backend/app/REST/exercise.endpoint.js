import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const exerciseEndpoint = (router) => {
  /**
   * @swagger
   * tags:
   *   name: Exercise
   *   description: Moduł API odpowiadający za obsługę ćwiczeń
   * /api/exercise/create:
   *   post:
   *     summary: Dodanie nowego ćwiczenia
   *     tags: [Exercise]
   *     responses:
   *       200:
   *         description: Ćwiczenie zostało dodane
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: Exercise
   *   description: Moduł API odpowiadający za obsługę ćwiczeń
   * /api/exercise/get/:id:
   *   get:
   *     summary: Zwraca ćwiczenie po Id
   *     tags: [Exercise]
   *     responses:
   *       200:
   *         description: Zwraca jedno ćwiczenie o pasującym Id.
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: Exercise
   *   description: Moduł API odpowiadający za obsługę ćwiczeń
   * /api/exercise/remove/{id}:
   *   delete:
   *     summary: Usuwa ćwiczenie po danym id
   *     tags: [Exercise]
   *     responses:
   *       200:
   *         description: Usuwa dane ćwiczenie
   *       500:
   *         description: Bład serwera
   *
   */
  router.delete(
    "/api/exercise/remove/:id",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getExerciseManager(request)
          .removeById(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default exerciseEndpoint;
