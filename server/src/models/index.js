import { User } from "./user.js";

const models = (sequelize, Sequelize) => {
  let models = {
    User: User.init(sequelize, Sequelize)
  };

  // Run `.associate` if it exists,
  // ie create relationships in the ORM
  Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));
  return models;
};

export default models;