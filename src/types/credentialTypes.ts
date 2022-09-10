import { credentials } from "@prisma/client";

export type ICredentialData = Omit<credentials, "id" | "createdAt">;

export type ICreateCredentialData = Omit<
  credentials,
  "id" | "createdAt" | "userId"
>;
