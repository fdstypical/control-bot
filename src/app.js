import { Telegraf, Markup } from "telegraf";
import { config } from "../configs/index.js";

import PcController from "./controllers/PcController.js";

const bot = new Telegraf(config.TG_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "Welcome ❤️",
    Markup.keyboard([["💤 Sleep", "🔒 Lock", "📴 Turn off"], ["❌ Cancel"]])
      .oneTime()
      .resize()
  )
);

bot.hears("💤 Sleep", PcController.sleep);
bot.hears("🔒 Lock", PcController.lock);
bot.hears("📴 Turn off", PcController.tornOff);

bot.launch();
