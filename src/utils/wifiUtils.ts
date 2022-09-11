import { conflictError, notFoundError } from "../middlewares/errorMiddleware";
import { wifi } from "@prisma/client";
import * as wifiTypes from "../types/wifiTypes";

export function verifyWifiTitleExists(wifiTitleExists: wifi | null) {
  if (wifiTitleExists) throw conflictError("This note title");
}

export function verifyWifiExists(wifiExists: any) {
  console.log(wifiExists);
  if (!wifiExists) throw notFoundError("wifi");
}
