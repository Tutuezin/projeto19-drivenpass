import { conflictError } from "../middlewares/errorMiddleware";

export function verifyCredentialTitleExists(credentialTagExists: any) {
  if (credentialTagExists) throw conflictError("This credential title");
}
