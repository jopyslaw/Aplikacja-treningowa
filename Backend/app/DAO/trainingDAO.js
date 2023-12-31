import mongoose from "mongoose";
import * as _ from "lodash";
import Promise from "bluebird";
import applicationException from "../service/applicationException";
import mongoConverter from "../service/mongoConverter";

const sexType = {
  women: "Women",
  men: "Men",
};

const sexTypes = [sexType.men, sexType.women];

const workType = {
  standing: "Standing",
  sitting: "Sitting",
};

const workTypes = [workType.sitting, workType.standing];

const physcialActivityType = {
  big: "big",
  mean: "mean",
  small: "small",
  absence: "absence",
};

const physcialActivityTypes = [
  physcialActivityType.absence,
  physcialActivityType.mean,
  physcialActivityType.small,
  physcialActivityType.absence,
];

const trainingSchema = new mongoose.Schema(
  {
    trainerTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trainerType",
      required: true,
    },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    sex: { type: String, enum: sexTypes, required: true },
    trainingGoal: { type: String, required: true },
    physicalActivity: {
      type: String,
      enum: physcialActivityTypes,
      required: true,
    },
    workType: { type: String, enum: workTypes, required: true },
    excercises: [],
  },
  {
    collection: "training",
  }
);

const TrainingModel = mongoose.model("training", trainingSchema);

const createTraningFromArray = async (trainingArray) => {
  const result = await TrainingModel.insertMany(trainingArray);
  return result;
};

const createNewOrUpdate = (training) => {
  return Promise.resolve()
    .then(() => {
      if (!training.id) {
        return new TrainingModel(training).save().then((result) => {
          if (result) {
            return mongoConverter(result);
          }
        });
      } else {
        return TrainingModel.findByIdAndUpdate(
          training.id,
          _.omit(training, "id"),
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

const getAllTrainings = async () => {
  const result = await TrainingModel.find({});
  if (result) {
    return result;
  }
};

const getByTrainingId = async (id) => {
  const result = await TrainingModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.NOT_FOUND,
    "User not found"
  );
};

const getTrainingsByTrainerTypeId = async (id) => {
  const result = await TrainingModel.find(
    { trainerTypeId: id },
    {},
    { lean: "toObject" }
  );

  return result;
};

const removeById = async (id) => {
  return await TrainingModel.findByIdAndRemove(id);
};

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByTrainingId,
  removeById: removeById,
  createTraningFromArray,
  getAllTrainings,
  getTrainingsByTrainerTypeId,

  model: TrainingModel,

  sexType,
  workType,
  physcialActivityType,
};
