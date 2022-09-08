import { users } from "@prisma/client";

export type IUserData = Omit<users, "id" | "createdAt">;
