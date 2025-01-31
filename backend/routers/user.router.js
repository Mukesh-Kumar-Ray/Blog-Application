import express from "express";
import {
  register,
  login,
  logout,
  getMyProfile,
  getAdmins,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/my-profile", getMyProfile);
router.get("/admins", getAdmins);

export default router;
