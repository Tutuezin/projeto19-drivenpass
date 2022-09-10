import * as cryptoUtils from "../utils/cryptoUtils";
import * as credentialUtils from "../utils/credentialUtils";
import * as credentialTypes from "../types/credentialTypes";
import * as credentialRepository from "../repositories/credentialRepository";

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
  return credentialRepository.getAllCredentials(userId);
}
