import mongoose from "mongoose";
import * as _ from "lodash";
import Promise from "bluebird";
import applicationException from "../service/applicationException";
import mongoConverter from "../service/mongoConverter";

const customerServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    creationDate: { type: String, required: true },
  },
  {
    collection: "customerService",
  }
);

const CustomerServiceModel = mongoose.model(
  "customerService",
  customerServiceSchema
);

const createNewOrUpdate = (customerApplication) => {
  return Promise.resolve()
    .then(() => {
      if (!customerApplication.id) {
        return new CustomerServiceModel(customerApplication)
          .save()
          .then((result) => {
            if (result) {
              return mongoConverter(result);
            }
          });
      } else {
        return CustomerServiceModel.findByIdAndUpdate(
          customerApplication.id,
          _.omit(customerApplication, "id"),
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

const getByCustomerApplicationId = async (id) => {
  const result = await CustomerServiceModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(
    applicationException.NOT_FOUND,
    "User not found"
  );
};

const removeById = async (id) => {
  return await CustomerServiceModel.findByIdAndRemove(id);
};

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByCustomerApplicationId,
  removeById: removeById,

  model: CustomerServiceModel,
};
