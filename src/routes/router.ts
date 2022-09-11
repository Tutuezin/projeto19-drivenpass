import { Router } from "express";
import authRouter from "./authRouter";
import credentialRouter from "./credentialRouter";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);

export default router;
