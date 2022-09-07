import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

// Postgres Client
const { Pool } = pg;

export const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Prisma Client
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

export const prisma = new PrismaClient();
