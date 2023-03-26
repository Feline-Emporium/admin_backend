import express from "express";
import getAllUsers from "../services/getAllUsers.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    res.status(200).json(await getAllUsers());
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;