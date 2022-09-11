import { conflictError } from "../middlewares/errorMiddleware";
import { cards } from "@prisma/client";

export function verifyCardTitleExists(cardTitleExists: cards | null) {
  if (cardTitleExists) throw conflictError("This card title");
}
