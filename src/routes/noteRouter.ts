import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { createNote } from "../schemas/noteSchema";
import * as noteController from "../controllers/noteController";

const noteRouter = Router();

noteRouter.post(
  "/note/create",
  validateToken,
  validateSchema(createNote),
  noteController.createNote
);

noteRouter.get("/notes", validateToken);

noteRouter.get("/note/:id", validateToken);

noteRouter.delete("/note/delete/:id", validateToken);

export default noteRouter;
