/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import "reflect-metadata";

import express = require("express");
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
require('dotenv').config()

const app = express();
app.use(bodyParser.json());

// register express routes from defined application routes
Routes.forEach(route => {
  (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    const result = (new (route.controller as any))[route.action](req, res, next);
    if (result instanceof Promise) {
      result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
      
    } else if (result !== null && result !== undefined) {
      res.json(result);
    }
  });
});

export default app;
