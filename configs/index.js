import dotenv from "dotenv";
dotenv.config();

export const { config } = await import("./config.js");
