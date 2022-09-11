import { prisma } from "../config/database";
import * as wifiTypes from "../types/wifiTypes";

export async function createWifi(
  userId: number,
  wifi: wifiTypes.ICreateWifiData
) {
  const wifiInfo = {
    userId,
    ...wifi,
  };

  await prisma.wifi.create({ data: wifiInfo });
}

export async function getAllWifis(userId: number) {
  return await prisma.wifi.findMany({
    where: { userId },
    select: {
      id: true,
      wifiTitle: true,
      name: true,
      password: true,
      createdAt: true,
    },
  });
}

export async function getWifiById(userId: number, id: number) {
  return await prisma.wifi.findFirst({
    where: { userId, id },
    select: {
      id: true,
      wifiTitle: true,
      name: true,
      password: true,
      createdAt: true,
    },
  });
}

/* export async function deleteNote(id: number) {
  return await prisma.safeNotes.delete({ where: { id } });
} */
