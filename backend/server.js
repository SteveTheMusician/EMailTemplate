import 'dotenv/config';
import express from "express";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { Mail } from "./mail/Mail.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Email route
app.post("/api/send-email", async (req, res) => {
  try {
    const { to } = req.body; // Input aus Frontend

    if (!to) return res.status(400).json({ error: "Keine E-Mail-Adresse angegeben" });

    const emailHtml = await render(Mail());

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: "<YourFromMail>",
      to, // Hier die To-Adresse
      subject: "hello world",
      html: emailHtml,
    });

    res.json({ success: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Verknüpfung auf den React-Build
app.use(express.static("../frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});


app.listen(4000, () => console.log("Server läuft auf Port 4000"));
