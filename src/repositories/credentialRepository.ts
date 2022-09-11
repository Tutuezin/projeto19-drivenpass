import { prisma } from "../config/database";
import * as credentialTypes from "../types/credentialTypes";

export async function createCredential(
  userId: number,
  credential: credentialTypes.ICreateCredentialData
) {
  const credentialInfo = {
    userId,
    ...credential,
  };

  await prisma.credentials.create({ data: credentialInfo });
}

export async function findTitleCredential(
  userId: number,
  credentialTitle: string
) {
  return await prisma.credentials.findFirst({
    where: { userId, credentialTitle },
  });
}

export async function getAllCredentials(userId: number) {
  return await prisma.credentials.findMany({
    where: { userId },
    select: {
      id: true,
      url: true,
      credentialTitle: true,
      username: true,
      password: true,
      createdAt: true,
    },
  });
}

export async function getCredentialById(userId: number, id: number) {
  return await prisma.credentials.findFirst({
    where: { userId, id },
    select: {
      id: true,
      url: true,
      credentialTitle: true,
      username: true,
      password: true,
      createdAt: true,
    },
  });
}

export async function deleteCredential(userId: number, id: number) {
  return await prisma.credentials.delete({ where: { id } });
}
