import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { createCredential } from "../schemas/credentialSchema";
import * as credentialsController from "../controllers/credentialController";

const credentialRouter = Router();

credentialRouter.post(
  "/credential/create",
  validateToken,
  validateSchema(createCredential),
  credentialsController.createCredential
);

credentialRouter.get(
  "/credentials",
  validateToken,
  credentialsController.getAllCredentials
);

credentialRouter.get(
  "/credentials/:id",
  validateToken,
  credentialsController.getCredentialById
);

export default credentialRouter;
