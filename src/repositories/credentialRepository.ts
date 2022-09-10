import { prisma } from "../config/database";
import * as credentialTypes from "../types/credentialTypes";

export async function createCredential(
  credential: credentialTypes.ICreateCredentialData
) {
  //await prisma.credentials.create({data: credential})
}
