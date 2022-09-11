import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { createWifi } from "../schemas/wifiSchema";
import * as wifiController from "../controllers/wifiController";

const wifiRouter = Router();

wifiRouter.post(
  "/wifi/create",
  validateToken,
  validateSchema(createWifi),
  wifiController.createWifi
);

wifiRouter.get("/wifis", validateToken, wifiController.getAllWifis);

wifiRouter.get("/wifi/:id", validateToken, wifiController.getWifiById);

//wifiRouter.delete("/wifi/delete/:id", validateToken, wifiController.deleteWifi);

export default wifiRouter;
