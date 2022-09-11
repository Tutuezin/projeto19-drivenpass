import joi from "joi";

export const createNote = joi.object({
  noteTitle: joi.string().max(50).required(),
  text: joi.string().max(1000).required(),
});
