import { conflictError, notFoundError } from "../middlewares/errorMiddleware";
import { safeNotes } from "@prisma/client";
import * as noteTypes from "../types/noteTypes";

export function verifyNoteTitleExists(noteTitleExists: safeNotes | null) {
  if (noteTitleExists) throw conflictError("This note title");
}

export function verifyNoteExists(noteExists: noteTypes.INoteData | null) {
  if (!noteExists) throw notFoundError("note");
}
