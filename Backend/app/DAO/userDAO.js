import mongoose from "mongoose";
import * as _ from "lodash";
import Promise from "bluebird";
import applicationException from "../service/applicationException";
import mongoConverter from "../service/mongoConverter";

const userRole = {
  admin: "admin",
  user: "user",
  trainer: "trainer",
};

const trainerType = {
  functional: "functional",
  reducing: "reducing",
  strengthening: "strengthening",
  generalDevelopment: "generalDevelopment",
  forWomenDuringAndAfterPregnancy: "forWomenDuringAndAfterPregnancy",
  relaxingTheSenses: "relaxingTheSenses",
};

const userRoles = [userRole.admin, userRole.user, userRole.trainer];

const trainerTypes = [
  trainerType.functional,
  trainerType.reducing,
  trainerType.strengthening,
  trainerType.generalDevelopment,
  trainerType.forWomenDuringAndAfterPregnancy,
  trainerType.relaxingTheSenses,
];

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    login: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: userRoles,
      default: userRole.user,
      required: false,
    },
    trainerType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trainerType",
      required: false,
    },
    active: { type: Boolean, default: true, required: false },
    isAdmin: { type: Boolean, default: true, required: false },
  },
  {
    collection: "user",
  }
);

const UserModel = mongoose.model("user", userSchema);

const createNewOrUpdate = (user) => {
  return Promise.resolve()
    .then(() => {
      if (!user.id) {
        return new UserModel(user).save().then((result) => {
          if (result) {
            return mongoConverter(result);
          }
        });
      } else {
        return UserModel.findByIdAndUpdate(user.id, _.omit(user, "id"), {
          new: true,
        });
      }
    })
    .catch((error) => {
      if ("ValidationError" === error.name) {
        error = error.errors[Object.keys(error.errors)[0]];
        throw applicationException.new(
          applicationException.BAD_REQUEST,
          error.message
        );
      }
      throw error;
    });
};

const getByEmailOrName = async (name) => {
  const result = await UserModel.findOne({
    $or: [{ email: name }, { name: name }],
  });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.NOT_FOUND,
    "User not found"
  );
};

const get = async (id) => {
  const result = await UserModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.NOT_FOUND,
    "User not found"
  );
};

const removeById = async (id) => {
  return await UserModel.findByIdAndRemove(id);
};

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByEmailOrName: getByEmailOrName,
  get: get,
  removeById: removeById,

  userRole: userRole,
  model: UserModel,
};
