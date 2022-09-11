import { conflictError } from "../middlewares/errorMiddleware";
import { cards } from "@prisma/client";
import { notFoundError } from "../middlewares/errorMiddleware";
import * as cardTypes from "../types/cardTypes";

export function verifyCardTitleExists(cardTitleExists: cards | null) {
  if (cardTitleExists) throw conflictError("This card title");
}

export function verifyCardExists(cardExists: cardTypes.ICardData | null) {
  if (!cardExists) throw notFoundError("card");
}
