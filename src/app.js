import { Telegraf, Markup } from "telegraf";
import { config } from "../configs/index.js";

const bot = new Telegraf(config.TG_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "Welcome ❤️",
    Markup.keyboard([["💤 Sleep", "🔒 Lock", "📴 Turn off"], ["❌ Cancel"]])
      .oneTime()
      .resize()
  )
);

bot.hears("💤 Sleep", (ctx) => ctx.reply("Ok, going sleep"));
bot.hears("🔒 Lock", (ctx) => ctx.reply("Okay, computer is locked"));
bot.hears("📴 Turn off", (ctx) => ctx.reply("I will turn it off"));

bot.launch();
