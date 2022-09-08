import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as authTypes from "../types/authTypes";
import * as authRepository from "../repositories/authRepository";
import * as authUtils from "../utils/authUtils";

dotenv.config();

export async function findEmailById(id: number) {
  const user = await authRepository.findEmailById(id);

  return user;
}

export async function signUp(userData: authTypes.ICreateUser) {
  const emailExists = await authRepository.findEmail(userData.email);

  authUtils.verifyEmail(emailExists);

  const hashedPassword = await authUtils.encryptPassword(userData.password);

  await authRepository.createUser({
    email: userData.email,
    password: hashedPassword,
  });
}
