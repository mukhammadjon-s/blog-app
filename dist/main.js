"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
dotenv_1.default.config();
var app = express_1.default();
var port = process.env.PORT;
app.get('/', function (req, res) {
    res.send('bismillah');
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:" + port);
});
