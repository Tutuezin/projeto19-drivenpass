import * as wifiRepository from "../repositories/wifiRepository";
import * as wifiTypes from "../types/wifiTypes";
import * as wifiUtils from "../utils/wifiUtils";
import * as cryptoUtils from "../utils/cryptoUtils";

export async function createWifi(
  userId: number,
  wifi: wifiTypes.ICreateWifiData
) {
  const hashedPassword = cryptoUtils.encryptData(wifi.password);

  await wifiRepository.createWifi(userId, {
    ...wifi,
    password: hashedPassword,
  });
}

export async function getAllWifis(userId: number) {
  const wifiList = await wifiRepository.getAllWifis(userId);

  for (let i = 0; i < wifiList.length; i++) {
    const element = wifiList[i];

    element.password = cryptoUtils.decryptData(element.password);
  }

  return wifiList;
}

export async function getWifiById(userId: number, id: number) {
  const wifi = await wifiRepository.getWifiById(userId, id);

  wifiUtils.verifyWifiExists(wifi);

  if (wifi) {
    const decryptedPassword = cryptoUtils.decryptData(wifi?.password);
    const wifiById = {
      ...wifi,
      password: decryptedPassword,
    };
    return wifiById;
  }
}

export async function deleteWifi(id: number) {
  return await wifiRepository.deleteWifi(id);
}
