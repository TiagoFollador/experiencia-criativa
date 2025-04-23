import express from "express";
import { deleteUser, editUser, getUserById, getUsers, storeUser } from "../Controllers/users.js";

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUserById)
router.post("/", storeUser)
router.put("/:id", editUser)
router.delete("/:id", deleteUser)

export default router