import { unauthorizedError } from "../middlewares/errorMiddleware";
import bcrypt from "bcrypt";
import Cryptr from "cryptr";

const cryptr = new Cryptr(String(process.env.CRYPTR_SECRET_KEY));

export async function encryptMasterPassword(password: string) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
}

export function checkPassword(password: string, hashedPassword: string) {
  if (!bcrypt.compareSync(password, hashedPassword))
    throw unauthorizedError("Email or password");
}

export function encryptData(data: string) {
  const encryptedString = cryptr.encrypt(data);
  return encryptedString;
}

export function decryptData(encryptedString: string) {
  const decryptedString = cryptr.decrypt(encryptedString);
  return decryptedString;
}
