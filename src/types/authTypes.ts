import { users } from "@prisma/client";

export type ICreateUser = Omit<users, "id" | "createdAt">;
