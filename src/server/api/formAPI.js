import { Router } from "express";
const nodemailer = require("nodemailer");

const formAPI = Router();

formAPI.post("/", async (req, res, next) => {
  const { regNumber, carPurchaseDate, title } = req.body;

  console.log(regNumber, carPurchaseDate, title);
});

export default formAPI;
