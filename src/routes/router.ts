import { Router } from "express";
import authRouter from "./authRouter";
import credentialRouter from "./credentialRouter";
import noteRouter from "./noteRouter";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(noteRouter);

export default router;
