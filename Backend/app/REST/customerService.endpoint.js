import businessContainer from "../business/business.container";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const customerServiceEndpoint = (router) => {
  /**
   * @swagger
   * tags:
   *   name: CustomerService
   *   description: Moduł API odpowiadający za obsługę zgłoszeń BOK
   * /api/customerService/create:
   *   post:
   *     summary: Dodanie nowego zgłoszenia BOK
   *     tags: [CustomerService]
   *     responses:
   *       200:
   *         description: Zgłoszenie zostało dodane
   *       500:
   *         description: Bład serwera
   *
   */
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
  /**
   * @swagger
   * tags:
   *   name: CustomerService
   *   description: Moduł API odpowiadający za obsługę zgłoszeń BOK
   * /api/customerService/get/{id}:
   *   get:
   *     summary: Zwraca zgłoszenie o danym ID
   *     tags: [CustomerService]
   *     responses:
   *       200:
   *         description: Zwraca zgłoszenie o danym Id
   *       500:
   *         description: Bład serwera
   *
   */
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
  /**
   * @swagger
   * tags:
   *   name: CustomerService
   *   description: Moduł API odpowiadający za obsługę zgłoszeń BOK
   * /api/customerService/remove/{id}:
   *   delete:
   *     summary: Usuwa zgłoszenie o danym Id
   *     tags: [CustomerService]
   *     responses:
   *       200:
   *         description: Dane zgłoszenie zostało usunięte
   *       500:
   *         description: Bład serwera
   *
   */
  router.delete(
    "/api/customerService/remove/:id",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getCustomerServiceManager(request)
          .removeById(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );
};

export default customerServiceEndpoint;
