import { conflictError, notFoundError } from "../middlewares/errorMiddleware";

export function verifyNoteTitleExists(noteTitleExists: any) {
  if (noteTitleExists) throw conflictError("This note title");
}

export function verifyNoteExists(noteExists: any) {
  if (!noteExists) throw notFoundError("note");
}
