import { prisma } from "../config/database";
import * as cardTypes from "../types/cardTypes";

export async function createCard(
  userId: number,
  note: cardTypes.ICreateCardData
) {
  const cardInfo = {
    userId,
    ...note,
  };

  // await prisma.safeNotes.create({ data: noteInfo });
}

/* export async function findTitleNote(userId: number, noteTitle: string) {
  return await prisma.safeNotes.findFirst({
    where: { userId, noteTitle },
  });
}

export async function getAllNotes(userId: number) {
  return await prisma.safeNotes.findMany({
    where: { userId },
    select: {
      id: true,
      noteTitle: true,
      text: true,
      createdAt: true,
    },
  });
}

export async function getNoteById(userId: number, id: number) {
  return await prisma.safeNotes.findFirst({
    where: { userId, id },
    select: {
      id: true,
      noteTitle: true,
      text: true,
      createdAt: true,
    },
  });
}

export async function deleteNote(id: number) {
  return await prisma.safeNotes.delete({ where: { id } });
}
 */
