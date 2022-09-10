import * as authUtils from "../utils/authUtils";
import * as credentialTypes from "../types/credentialTypes";
import * as credentialRepository from "../repositories/credentialRepository";

export async function createCredential(
  credential: credentialTypes.ICreateCredentialData
) {
  await credentialRepository.createCredential(credential);
}
