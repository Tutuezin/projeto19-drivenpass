import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { missingHeaderError, unauthorizedError } from "../errorMiddleware";

dotenv.config();

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();
  const secretKey = process.env.JWT_SECRET;

  if (secretKey === undefined || token === undefined) {
    throw missingHeaderError("Invalid request header");
  }
  const user = jwt.verify(token, secretKey);

  if (!user) {
    throw unauthorizedError("Token");
  }

  res.locals.user = user;

  next();
}
