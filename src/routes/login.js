import express from "express";
import Login from '../services/login.js'

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  Login(username, password)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });

});

export default router;
