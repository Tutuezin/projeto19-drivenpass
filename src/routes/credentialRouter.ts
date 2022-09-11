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
  "/credential/:id",
  validateToken,
  credentialsController.getCredentialById
);

credentialRouter.delete(
  "/credential/delete/:id",
  validateToken,
  credentialsController.deleteCredential
);

export default credentialRouter;
