import {
  conflictError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";
import bcrypt from "bcrypt";

export async function encryptPassword(password: string) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
}
export function verifyEmailExists(emailExists: any) {
  if (emailExists) throw conflictError("Email");
}

export function verifyEmailNotExists(emailExists: any) {
  if (!emailExists) throw unauthorizedError("Email or password");
}
