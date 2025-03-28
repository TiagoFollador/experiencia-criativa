import express from "express";
import { getUsers, storeUser } from "../Controllers/users.js";

const router = express.Router()

router.get("/", getUsers)
router.post("/", storeUser)

export default router