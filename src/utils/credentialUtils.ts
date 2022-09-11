import { conflictError } from "../middlewares/errorMiddleware";

export function verifyCredentialTitleExists(credentialTitleExists: any) {
  if (credentialTitleExists) throw conflictError("This credential title");
}
