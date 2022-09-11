import joi from "joi";

export const createWifi = joi.object({
  wifiTitle: joi.string().required(),
  name: joi.string().required(),
  password: joi.string().required(),
});
