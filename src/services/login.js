import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

export default async function login(username, password) {
  try {
    if (username !== process.env.USERNAME || password !== process.env.PASSWORD) {
      return "invalid username or password";
    } else {
      const token = jwt.sign(
        {
          username: "admin",
        },
        `${process.env.JWT_TOKEN_SECRET}`,
        {
          expiresIn: "1h",
        }
      );
      return token;
    }
  } catch (err) {
    return err
  }
}