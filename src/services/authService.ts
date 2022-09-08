import * as authTypes from "../types/authTypes";
import * as authRepository from "../repositories/authRepository";
import * as authUtils from "../utils/authUtils";
import dotenv from "dotenv";

dotenv.config();

export async function findEmailById(id: number) {
  const user = await authRepository.findEmailById(id);

  return user;
}

export async function signUp(userData: authTypes.IUserData) {
  const emailExists = await authRepository.findEmail(userData.email);

  authUtils.verifyEmailExists(emailExists);

  const hashedPassword = await authUtils.encryptPassword(userData.password);

  await authRepository.createUser({
    email: userData.email,
    password: hashedPassword,
  });
}

export async function signIn(userData: authTypes.IUserData) {
  const emailExists = await authRepository.findEmail(userData.email);

  authUtils.verifyEmailNotExists(emailExists);

  if (emailExists?.password) {
    authUtils.checkPassword(userData.password, emailExists.password);
    const token = authUtils.generateToken(emailExists);
    return token;
  }
}
