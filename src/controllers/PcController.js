import { slicerFactory } from "../utils/message.js";
import ShComands from "../models/ShComands.js";

const comand = new ShComands();
const slicer = slicerFactory(2);

export default class PcController {
  static tornOff(ctx) {
    comand.tornOff();
    ctx.reply(slicer(ctx.message.text));
  }

  static sleep() {
    comand.sleep();
    ctx.reply(slicer(ctx.message.text));
  }

  static lock() {
    comand.lock();
    ctx.reply(slicer(ctx.message.text));
  }
}
