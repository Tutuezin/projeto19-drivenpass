import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { createCredential } from "../schemas/credentialSchema";
import * as credentialsController from "../controllers/credentialController";

const credentialsRouter = Router();

credentialsRouter.post(
  "/credential/create",
  validateSchema(createCredential),
  credentialsController.createCredentials
);

export default credentialsRouter;
