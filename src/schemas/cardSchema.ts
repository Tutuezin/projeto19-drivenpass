import Joi from "joi";
import DateExtension from "@joi/date";

const joi = Joi.extend(DateExtension);

export const createCard = joi.object({
  cardTitle: joi.string().required(),
  cardHolderName: joi.string().required(),
  cardNumber: joi
    .string()
    .pattern(/^[0-9]{16}$/)
    .required(),
  securityCode: joi
    .string()
    .pattern(/^[0-9]{3}$/)
    .required(),
  expirationDate: joi.string().format("MM/YY").required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid("credit", "debit", "both").required(),
});
