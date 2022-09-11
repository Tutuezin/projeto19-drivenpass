import * as cryptoUtils from "../utils/cryptoUtils";
import * as credentialUtils from "../utils/credentialUtils";
import * as credentialTypes from "../types/credentialTypes";
import * as credentialRepository from "../repositories/credentialRepository";
import { notFoundError } from "../middlewares/errorMiddleware";

export async function createCredential(
  userId: number,
  credential: credentialTypes.ICreateCredentialData
) {
  const credentialTitleExists = await credentialRepository.findTitleCredential(
    userId,
    credential.credentialTitle
  );

  credentialUtils.verifyCredentialTitleExists(credentialTitleExists);

  const hashedPassword = cryptoUtils.encryptData(credential.password);

  await credentialRepository.createCredential(userId, {
    ...credential,
    password: hashedPassword,
  });
}

export async function getAllsCredentials(userId: number) {
  const credentialsList = await credentialRepository.getAllCredentials(userId);

  for (let i = 0; i < credentialsList.length; i++) {
    const element = credentialsList[i];

    element.password = cryptoUtils.decryptData(element.password);
  }

  return credentialsList;
}

export async function getCredentialById(userId: number, id: number) {
  const credential = await credentialRepository.getCredentialById(userId, id);

  if (credential) {
    const decryptedPassword = cryptoUtils.decryptData(credential?.password);
    const credentialById = {
      ...credential,
      password: decryptedPassword,
    };
    return credentialById;
  }

  throw notFoundError("credential");
}
