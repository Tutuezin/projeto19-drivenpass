import { conflictError } from "../middlewares/errorMiddleware";
import bcrypt from "bcrypt";

export async function encryptPassword(password: string) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
}
export function verifyEmail(emailExists: any) {
  if (emailExists) throw conflictError("Email");
}
