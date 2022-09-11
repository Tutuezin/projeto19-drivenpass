import { cards } from "@prisma/client";

export type ICreateCardData = Omit<cards, "id" | "createdAt" | "userId">;
