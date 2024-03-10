import express, {
  Express,
  Request,
  Response,
  Application,
  json,
} from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
express.json();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server ");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
