import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { createCard } from "../schemas/cardSchema";
import * as cardController from "../controllers/cardController";

const cardRouter = Router();

cardRouter.post(
  "/card/create",
  validateToken,
  validateSchema(createCard),
  cardController.createCard
);

cardRouter.get("/cards", validateToken, cardController.getAllCards);

cardRouter.get("/card/:id", validateToken, cardController.getCardById);

cardRouter.delete("/card/delete/:id", validateToken, cardController.deleteCard);

export default cardRouter;
