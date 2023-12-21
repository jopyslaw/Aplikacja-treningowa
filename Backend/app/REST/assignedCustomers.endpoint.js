import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const assignedCustomersEndpoint = (router) => {
  /**
   * @swagger
   * tags:
   *   name: AssignedCustomers
   *   description: Moduł API odpowiadający za obsługę przypisania użytkownika do trenera
   * /api/assignedCustomers/create:
   *   post:
   *     summary: Dodanie nowego przypisania między użytkownikiem ,a trenerem
   *     tags: [AssignedCustomers]
   *     responses:
   *       200:
   *         description: Przypisanie zostało dodane.
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: AssignedCustomers
   *   description: Moduł API odpowiadający za obsługę przypisania użytkownika do trenera
   * /api/assignedCustomers/suspend:
   *   put:
   *     summary: Zawieszenie współpracy z trenerem na nieokreślony okres
   *     tags: [AssignedCustomers]
   *     responses:
   *       200:
   *         description: Został zaaktualizowany wpis w bazie
   *       500:
   *         description: Bład serwera
   *
   */
  router.put(
    "/api/assignedCustomers/suspend",
    async (request, response, next) => {
      try {
        const result = await businessContainer
          .getAssignedCustomersManager(request)
          .suspendCooperation(request.body.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  /**
   * @swagger
   * tags:
   *   name: AssignedCustomers
   *   description: Moduł API odpowiadający za obsługę przypisania użytkownika do trenera
   * /api/assignedCustomers/remove/{userId}:
   *   delete:
   *     summary: Usunięcie współpracy między użytkownikiem, a trenerem
   *     tags: [AssignedCustomers]
   *     responses:
   *       200:
   *         description: Dane przypisane zostało usunięte
   *       500:
   *         description: Bład serwera
   *
   */
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

  /**
   * @swagger
   * tags:
   *   name: AssignedCustomers
   *   description: Moduł API odpowiadający za obsługę przypisania użytkownika do trenera
   * /api/assignedCustomers/users/{trainerId}:
   *   get:
   *     summary: Zwraca wszsytkich przypisanych użytkowników do danego trenera
   *     tags: [AssignedCustomers]
   *     responses:
   *       200:
   *         description: Zwraca listę użytkowników
   *       500:
   *         description: Bład serwera
   *
   */
  router.get(
    "/api/assignedCustomers/users/:trainerId",
    auth,
    async (request, response, next) => {
      try {
        const result = await businessContainer
          .getAssignedCustomersManager()
          .getAssignedUsersForTrainer(request.params.trainerId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  /**
   * @swagger
   * tags:
   *   name: AssignedCustomers
   *   description: Moduł API odpowiadający za obsługę przypisania użytkownika do trenera
   * /api/assignedCustomers/trainers/{userId}:
   *   get:
   *     summary: Zwraca wszsytkich przypisanych trenerów do danego użytkownika
   *     tags: [AssignedCustomers]
   *     responses:
   *       200:
   *         description: Zwraca listę trenerów
   *       500:
   *         description: Bład serwera
   *
   */
  router.get(
    "/api/assignedCustomers/trainers/:userId",
    auth,
    async (request, response, next) => {
      try {
        const result = await businessContainer
          .getAssignedCustomersManager()
          .getAssignedTrainersForUser(request.params.userId);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default assignedCustomersEndpoint;
