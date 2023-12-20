import exerciseDAO from "../DAO/exerciseDAO";
import PasswordDAO from "../DAO/passwordDAO";
import TokenDAO from "../DAO/tokenDAO";
import trainerTypeDAO from "../DAO/trainerTypeDAO";
import trainingDAO from "../DAO/trainingDAO";
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

    const trainings = await Promise.all(
      trainers.map(async (trainer) => {
        const tranning = trainingDAO.getTrainingsByTrainerTypeId(
          trainer.trainerType
        );

        const exercises = await Promise.all(
          tranning.map(async (traning) => {
            const exercise = await exerciseDAO.getExercisesByIds(
              traning.excercises
            );
            return {
              trainerTypeId: tranning.trainerTypeId,
              title: tranning.title,
              description: tranning.description,
              sex: tranning.sex,
              traningGoal: tranning.trainingGoal,
              physcialActivity: tranning.physcialActivity,
              workType: tranning.workType,
              exercise,
            };
          })
        );

        return {
          email: trainer.email,
          name: trainer.name,
          surname: trainer.surname,
          login: trainer.login,
          role: trainer.role,
          trainerType: trainer.trainerType,
          active: trainer.active,
          isAdmin: trainer.isAdmin,
          exercises,
        };
      })
    );

    return trainings;
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
