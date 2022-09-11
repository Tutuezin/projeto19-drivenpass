import { wifi } from "@prisma/client";

export type ICreateWifiData = Omit<wifi, "id" | "createdAt" | "userId">;

export type IWifiData = Omit<wifi, "userId">;
