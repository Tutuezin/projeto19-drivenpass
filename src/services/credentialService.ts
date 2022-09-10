import * as authUtils from "../utils/authUtils";
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

  console.log(credentialTitleExists);

  credentialUtils.verifyCredentialTitleExists(credentialTitleExists);

  await credentialRepository.createCredential(userId, credential);
}
