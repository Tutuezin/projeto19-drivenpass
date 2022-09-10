import {
  conflictError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";
import { users } from "@prisma/client";
import jwt from "jsonwebtoken";

export function verifyEmailExists(emailExists: any) {
  if (emailExists) throw conflictError("Email");
}

export function verifyEmailNotExists(emailExists: any) {
  if (!emailExists) throw unauthorizedError("Email or password");
}

export function generateToken(user: users) {
  const token = jwt.sign({ id: user.id }, String(process.env.JWT_SECRET), {
    expiresIn: "24h",
  });

  return token;
}
