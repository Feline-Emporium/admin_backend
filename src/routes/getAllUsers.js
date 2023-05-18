import express from "express";
import getAllUsers from "../services/getAllUsers.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/all", /* verifyToken, */ async (req, res) => {
  getAllUsers().then((result) => {
    res.status(200).json(result);
  })
});

export default router;