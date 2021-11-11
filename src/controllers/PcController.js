import { slicerFactory } from "../utils/message.js";
import ShComands from "../models/ShComands.js";

const slicer = slicerFactory(2);
const comand = new ShComands({
  turn_off: "turn_off.sh",
  sleep: "sleep.sh",
  lock: "lock.sh",
});

export default class PcController {
  static tornOff(ctx) {
    comand.tornOff();
    ctx.reply(slicer(ctx.message.text));
  }

  static sleep(ctx) {
    comand.sleep();
    ctx.reply(slicer(ctx.message.text));
  }

  static lock(ctx) {
    comand.lock();
    ctx.reply(slicer(ctx.message.text));
  }
}
