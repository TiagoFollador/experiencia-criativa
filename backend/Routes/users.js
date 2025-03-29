import express from "express";
import { deleteUser, editUser, getUsers, showUsers, storeUser } from "../Controllers/users.js";

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", showUsers)
router.post("/", storeUser)
router.put("/:id", editUser)
router.delete("/:id", deleteUser)

export default router