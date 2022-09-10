import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { createCredential } from "../schemas/credentialSchema";
import * as credentialsController from "../controllers/credentialController";

const credentialsRouter = Router();

credentialsRouter.post(
  "/credential/create",
  validateToken,
  validateSchema(createCredential),
  credentialsController.createCredentials
);

export default credentialsRouter;
