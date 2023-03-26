import express from "express";
import getAllUsers from "../services/getAllUsers.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  await getAllUsers().then((result) => {
    res.status(200).json(result);
  })
});

export default router;