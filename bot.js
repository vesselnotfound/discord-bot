const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`Bot online!`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "!ping") {
    msg.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
