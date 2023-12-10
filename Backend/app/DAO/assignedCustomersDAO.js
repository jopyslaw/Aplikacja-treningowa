import mongoose from "mongoose";
import * as _ from "lodash";
import Promise from "bluebird";
import applicationException from "../service/applicationException";
import mongoConverter from "../service/mongoConverter";
import uniqueValidator from "mongoose-unique-validator";

const assignedCustomersSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: false,
    },
    trainerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: false,
    },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  {
    collection: "assignedCustomers",
  }
);

const AssignedCustomersModel = mongoose.model(
  "assignedCustomers",
  assignedCustomersSchema
);

const createNewOrUpdate = (assignedCustomer) => {
  return Promise.resolve()
    .then(() => {
      if (!user.id) {
        return new AssignedCustomersModel(assignedCustomer)
          .save()
          .then((result) => {
            if (result) {
              return mongoConverter(result);
            }
          });
      } else {
        return AssignedCustomersModel.findByIdAndUpdate(
          user.id,
          _.omit(user, "id"),
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

const getByTrainerId = async (id) => {
  const result = await AssignedCustomersModel.findOne({ trainerId: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.NOT_FOUND,
    "User not found"
  );
};

const getByUserId = async (id) => {
  const result = await AssignedCustomersModel.findOne({ userId: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.NOT_FOUND,
    "User not found"
  );
};

const removeById = async (id) => {
  return await AssignedCustomersModel.findByIdAndRemove(id);
};

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByUserId,
  getByTrainerId,
  removeById: removeById,

  model: AssignedCustomersModel,
};
