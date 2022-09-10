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

  console.log(credentialInfo);

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
      url: true,
      credentialTitle: true,
      username: true,
      password: true,
      createdAt: true,
    },
  });
}
