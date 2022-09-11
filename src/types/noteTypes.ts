import { safeNotes } from "@prisma/client";

export type ICreateNoteData = Omit<safeNotes, "id" | "createdAt" | "userId">;

export type INoteData = Omit<safeNotes, "userId">;
