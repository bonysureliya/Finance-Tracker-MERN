import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response, json } from "express";
export const createToken = (req: Request, res: Response) => {
  const { id, secret } = req.body;
  const data = jwt.sign(id, secret);
  res.cookie("token", data, {
    httpOnly: true,
  });
  console.log(data);
  res.json({
    data: data,
  });
};

export const verifyToken = (req: Request, res: Response) => {
  const token = req.cookies.token;
  console.log(token);
  try {
    const user = jwt.verify(token, "hello");
    console.log(user);
    console.log(token);
  } catch (e) {
    res.json({
      message: "failure",
    });
  }
};
