import { prisma } from "../config/database";
import * as noteTypes from "../types/noteTypes";

export async function createNote(
  userId: number,
  note: noteTypes.ICreateNoteData
) {
  const noteInfo = {
    userId,
    ...note,
  };

  await prisma.safeNotes.create({ data: noteInfo });
}

export async function findTitleNote(userId: number, noteTitle: string) {
  return await prisma.safeNotes.findFirst({
    where: { userId, noteTitle },
  });
}
