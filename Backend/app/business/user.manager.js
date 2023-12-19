import PasswordDAO from "../DAO/passwordDAO";
import TokenDAO from "../DAO/tokenDAO";
import trainerTypeDAO from "../DAO/trainerTypeDAO";
import userDAO from "../DAO/userDAO";
import UserDAO from "../DAO/userDAO";
import applicationException from "../service/applicationException";
import sha1 from "sha1";

const create = (context) => {
  function hashString(password) {
    return sha1(password);
  }

  const authenticate = async (name, password) => {
    let userData;
    const user = await UserDAO.getByEmailOrName(name);
    if (!user) {
      throw applicationException.new(
        applicationException.UNAUTHORIZED,
        "User with that email does not exist"
      );
    }
    userData = await user;
    await PasswordDAO.authorize(user.id, hashString(password));
    const token = await TokenDAO.create(userData);
    return getToken(token);
  };

  const getToken = (token) => {
    return { token: token.value };
  };

  const createNewOrUpdate = async (userData) => {
    const user = await UserDAO.createNewOrUpdate(userData);
    if (await userData.password) {
      return await PasswordDAO.createOrUpdate({
        userId: user.id,
        password: hashString(userData.password),
      });
    } else {
      return user;
    }
  };

  const removeHashSession = async (userId) => {
    return await TokenDAO.remove(userId);
  };

  const removeById = async (userId) => {
    return await UserDAO.removeById(userId);
  };

  const getTrainersByTrainerType = async (trainerType) => {
    const trainerTypes = [
      { name: "lose", trainerTypeName: trainerTypeDAO.trainerType.reducing },
      {
        name: "injury",
        trainerTypeName: trainerTypeDAO.trainerType.functional,
      },
      {
        name: "put",
        trainerTypeName: trainerTypeDAO.trainerType.strengthening,
      },
      {
        name: "stability",
        trainerTypeName: trainerTypeDAO.trainerType.generalDevelopment,
      },
      {
        name: "relax",
        trainerTypeName: trainerTypeDAO.trainerType.relaxingTheSenses,
      },
      {
        name: "moveForPregnancy",
        trainerTypeName:
          trainerTypeDAO.trainerType.forWomenDuringAndAfterPregnancy,
      },
    ];

    const selectedTrainerType = trainerTypes.find(
      (trainerTypeObject) => trainerTypeObject.name === trainerType
    );

    if (!selectedTrainerType) {
      return;
    }

    const trainerTypeId = await trainerTypeDAO.getTrainerTypeByName(
      selectedTrainerType.trainerTypeName
    );

    const trainers = await userDAO.getAllTrainersWithTrainerTypeId(
      trainerTypeId._id
    );

    return trainers;
  };

  return {
    authenticate: authenticate,
    createNewOrUpdate: createNewOrUpdate,
    removeHashSession: removeHashSession,
    removeById,
    getTrainersByTrainerType,
  };
};

export default {
  create: create,
};
