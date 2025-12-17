import { Client, GatewayIntentBits } from "discord.js";
import express from "express";

/* ================= CONFIG ================= */
const TOKEN = process.env.DISCORD_TOKEN;
const PORT = process.env.PORT || 3000;
/* ======================================== */

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

/* ===== BOT ===== */
client.once("ready", () => {
  console.log(`🤖 Bot online como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }

  if (message.content === "!venda") {
    message.reply("💰 Sistema de vendas ativo!");
  }

  if (message.content === "!verificar") {
    message.reply("✅ Usuário verificado!");
  }
});

client.login(TOKEN);

/* ===== SERVER (Render precisa disso) ===== */
const app = express();

app.get("/", (req, res) => {
  res.send("Bot Discord está rodando!");
});

app.listen(PORT, () => {
  console.log("🌐 Servidor web ativo");
});
