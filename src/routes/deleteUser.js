import express from "express";
import deleteUserByUid from "../services/deleteUserByUid.js";

const router = express.Router();

router.delete('/delete/:uid', async (req, res) => {
  try {
    await deleteUserByUid(req.params.uid).then((res) => {
      res.status(200).send(res);
    });
  } catch (error) {
    res.status(400).send(test)
  }
});

export default router;