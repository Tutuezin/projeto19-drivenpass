import joi from "joi";

export const createCard = joi.object({
  cardTitle: joi.string().required(),
  cardHolderName: joi.string().required(),
  cardNumber: joi
    .string()
    .pattern(/^[0-9]{16}$/)
    .messages({ "string.pattern.base": "card number must be a number" })
    .required(),
  securityCode: joi
    .string()
    .pattern(/^[0-9]{3}$/)
    .messages({ "string.pattern.base": "security code must be a number" })
    .required(),
  expirationDate: joi.string().required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid("credit", "debit", "both").required(),
});
