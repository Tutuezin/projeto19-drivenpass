import { Router } from "express";
import authRouter from "./authRouter";
import credentialRouter from "./credentialRouter";
import noteRouter from "./noteRouter";
import cardRouter from "./cardRouter";
import wifiRouter from "./wifiRouter";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(noteRouter);
router.use(cardRouter);
router.use(wifiRouter);

export default router;
