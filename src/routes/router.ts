import { Router } from "express";
import authRouter from "./authRouter";
import credentialRouter from "./credentialRouter";
import noteRouter from "./noteRouter";
import cardRouter from "./cardRouter";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(noteRouter);
router.use(cardRouter);

export default router;
