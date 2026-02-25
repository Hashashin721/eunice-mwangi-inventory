import express from "express";
import { registerUser, loginUser } from "../auth/authController.js";

const router = express.Router();

// route to show login page (your existing HTML)
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "public" });
});

// route to show signup page (existing HTML)
router.get("/signup", (req, res) => {
  res.sendFile("signup.html", { root: "public" });
});

// API endpoints (backend logic)
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
