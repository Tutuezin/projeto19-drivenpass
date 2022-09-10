import joi from "joi";

export const createCredential = joi.object({
  credentialTitle: joi.string().required(),
  url: joi.string().uri().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});
