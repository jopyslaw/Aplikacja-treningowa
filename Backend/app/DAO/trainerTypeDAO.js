import mongoose from "mongoose";
import * as _ from "lodash";
import Promise from "bluebird";
import applicationException from "../service/applicationException";
import mongoConverter from "../service/mongoConverter";

const trainerType = {
  functional: "functional",
  reducing: "reducing",
  strengthening: "strengthening",
  generalDevelopment: "generalDevelopment",
  forWomenDuringAndAfterPregnancy: "forWomenDuringAndAfterPregnancy",
  relaxingTheSenses: "relaxingTheSenses",
};

const trainerTypes = [
  trainerType.functional,
  trainerType.reducing,
  trainerType.strengthening,
  trainerType.generalDevelopment,
  trainerType.forWomenDuringAndAfterPregnancy,
  trainerType.relaxingTheSenses,
];

const trainerTypeSchema = new mongoose.Schema(
  {
    trainerType: {
      type: String,
      enum: trainerTypes,
      required: false,
    },
    trenings: [],
  },
  {
    collection: "trainerType",
  }
);

const TrainerTypeModel = mongoose.model("trainerType", trainerTypeSchema);

const createNewOrUpdate = (trainerType) => {
  return Promise.resolve()
    .then(() => {
      if (!trainerType.id) {
        return new TrainerTypeModel(trainerType).save().then((result) => {
          if (result) {
            return mongoConverter(result);
          }
        });
      } else {
        return TrainerTypeModel.findByIdAndUpdate(
          trainerType.id,
          _.omit(trainerType, "id"),
          {
            new: true,
          }
        );
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

const getByTrainerTypeId = async (id) => {
  const result = await TrainerTypeModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.NOT_FOUND,
    "User not found"
  );
};

const removeById = async (id) => {
  return await TrainerTypeModel.findByIdAndRemove(id);
};

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByTrainerTypeId,
  removeById: removeById,

  model: TrainerTypeModel,
};
