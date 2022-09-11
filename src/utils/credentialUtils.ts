import { conflictError } from "../middlewares/errorMiddleware";
import { credentials } from "@prisma/client";

export function verifyCredentialTitleExists(
  credentialTitleExists: credentials | null
) {
  if (credentialTitleExists) throw conflictError("This credential title");
}
