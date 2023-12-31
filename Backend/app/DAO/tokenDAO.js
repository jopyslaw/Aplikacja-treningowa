import mongoose from "mongoose";
import config from "../config";
import momentWrapper from "../service/momentWrapper";
import jwt from "jsonwebtoken";
import mongoConverter from "../service/mongoConverter";
import applicationException from "../service/applicationException";
import trainerTypeDAO from "./trainerTypeDAO";

const tokenTypeEnum = {
  authorization: "authorization",
};

const tokenTypes = [tokenTypeEnum.authorization];

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    createDate: { type: Number, required: true },
    type: { type: String, enum: tokenTypes, required: true },
    value: { type: String, required: true },
  },
  {
    collection: "token",
  }
);

const TokenModel = mongoose.model("token", tokenSchema);

const create = async (user) => {
  const trainerType = user.trainerType
    ? await trainerTypeDAO.getByTrainerTypeId(user.trainerType)
    : "";

  const access = "auth";
  const userData = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isAdmin: user.isAdmin,
    trainerType: trainerType.trainerType,
    login: user.login,
    surname: user.surname,
    access: access,
  };
  const value = jwt.sign(userData, config.JwtSecret, {
    expiresIn: "3h",
  });
  const result = await TokenModel({
    userId: user.id,
    type: "authorization",
    value: value,
    createDate: momentWrapper.get().valueOf(),
  }).save();
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.BAD_REQUEST,
    error.message
  );
};

const get = async (tokenValue) => {
  const result = await TokenModel.findOne({ value: tokenValue });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.UNAUTHORIZED,
    "Token not found"
  );
};

const remove = async (userId) => {
  return await TokenModel.deleteOne({ userId: userId });
};

export default {
  create: create,
  get: get,
  remove: remove,

  tokenTypeEnum: tokenTypeEnum,
  model: TokenModel,
};
