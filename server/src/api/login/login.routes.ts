import * as jwt from "jsonwebtoken";
import { Request, Router, Response } from "express";
import { createToken, verifyToken } from "./login";
const route = Router();

route.post("/login", createToken);
route.get("/test", verifyToken);

export default route;
