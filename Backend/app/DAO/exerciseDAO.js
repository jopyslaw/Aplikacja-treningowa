import mongoose from "mongoose";
import * as _ from "lodash";
import Promise from "bluebird";
import applicationException from "../service/applicationException";
import mongoConverter from "../service/mongoConverter";

const exerciseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    numberOfRepetitions: { type: Number, required: true },
  },
  {
    collection: "exercise",
  }
);

const ExerciseModel = mongoose.model("exercise", exerciseSchema);

const createNewOrUpdate = (exercise) => {
  return Promise.resolve()
    .then(() => {
      if (!exercise.id) {
        return new ExerciseModel(exercise).save().then((result) => {
          if (result) {
            return mongoConverter(result);
          }
        });
      } else {
        return ExerciseModel.findByIdAndUpdate(
          exercise.id,
          _.omit(exercise, "id"),
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

const getByExerciseId = async (id) => {
  const result = await ExerciseModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.NOT_FOUND,
    "User not found"
  );
};

const removeById = async (id) => {
  return await ExerciseModel.findByIdAndRemove(id);
};

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByExerciseId,
  removeById: removeById,

  model: ExerciseModel,
};
