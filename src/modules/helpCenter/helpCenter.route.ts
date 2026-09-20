import express from "express";
import { createHelpCenterHandler } from "./helpCenter.controller.js";

const router = express.Router();

router.post("/", createHelpCenterHandler)

export const helpcenterroute = router;