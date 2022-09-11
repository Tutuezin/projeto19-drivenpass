import { cards } from "@prisma/client";

export type ICreateCardData = Omit<cards, "id" | "createdAt" | "userId">;

export type ICardData = Omit<cards, "userId" | "isVirtual" | "createdAt">;
