import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('bismillah');
});

app.listen(port, () => {
  return `[server]: Server is running at http://localhost:${port}`;
});
