import { Request, Response } from "express";
import * as wifiService from "../services/wifiService";

export async function createWifi(req: Request, res: Response) {
  const wifi = req.body;
  const { user } = res.locals;

  await wifiService.createWifi(user.id, wifi);

  res.status(201).send("Wifi created!");
}

export async function getAllWifis(req: Request, res: Response) {
  const { user } = res.locals;

  const wifis = await wifiService.getAllWifis(user.id);

  res.status(200).send(wifis);
}

export async function getWifiById(req: Request, res: Response) {
  const { user } = res.locals;
  const id = Number(req.params.id);

  const wifi = await wifiService.getWifiById(user.id, id);

  res.status(200).send(wifi);
}

export async function deleteWifi(req: Request, res: Response) {
  const { user } = res.locals;
  const id = Number(req.params.id);

  await wifiService.getWifiById(user.id, id);
  await wifiService.deleteWifi(id);

  res.status(200).send(`Wifi with id ${id} has been removed!`);
}
