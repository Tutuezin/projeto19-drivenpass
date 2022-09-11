import { conflictError } from "../middlewares/errorMiddleware";

export function verifyNoteTitleExists(noteTitleExists: any) {
  if (noteTitleExists) throw conflictError("This note title");
}
