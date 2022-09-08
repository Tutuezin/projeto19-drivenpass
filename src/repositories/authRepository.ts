import { prisma } from "../config/database";
import * as authTypes from "../types/authTypes";

export async function findEmailById(id: number) {
  const result = await prisma.users.findUnique({ where: { id } });

  return result;
}

export async function findEmail(email: string) {
  const result = await prisma.users.findUnique({ where: { email } });

  return result;
}

export async function createUser(user: authTypes.IUserData) {
  await prisma.users.create({ data: user });
}
