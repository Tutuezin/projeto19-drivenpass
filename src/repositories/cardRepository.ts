import { prisma } from "../config/database";
import * as cardTypes from "../types/cardTypes";

export async function createCard(
  userId: number,
  card: cardTypes.ICreateCardData
) {
  const cardInfo = {
    userId,
    ...card,
  };

  await prisma.cards.create({ data: cardInfo });
}

export async function findTitleCard(userId: number, cardTitle: string) {
  return await prisma.cards.findFirst({
    where: { userId, cardTitle },
  });
}

export async function getAllCards(userId: number) {
  return await prisma.cards.findMany({
    where: { userId },
    select: {
      id: true,
      cardTitle: true,
      cardHolderName: true,
      cardNumber: true,
      securityCode: true,
      expirationDate: true,
      password: true,
      type: true,
    },
  });
}

export async function getCardById(userId: number, id: number) {
  return await prisma.cards.findFirst({
    where: { userId, id },
    select: {
      id: true,
      cardTitle: true,
      cardHolderName: true,
      cardNumber: true,
      securityCode: true,
      expirationDate: true,
      password: true,
      type: true,
    },
  });
}

export async function deleteCard(id: number) {
  return await prisma.cards.delete({ where: { id } });
}
