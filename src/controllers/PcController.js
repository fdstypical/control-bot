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
    comand
      .tornOff()
      .then((stdout) => {
        console.log(stdout);
        ctx.reply(slicer(ctx.message.text));
      })
      .catch(console.error);
  }

  static sleep(ctx) {
    comand
      .sleep()
      .then((stdout) => {
        console.log(stdout);
        ctx.reply(slicer(ctx.message.text));
      })
      .catch(console.error);
  }

  static lock(ctx) {
    comand
      .lock()
      .then((stdout) => {
        console.log(stdout);
        ctx.reply(slicer(ctx.message.text));
      })
      .catch(console.error);
  }
}
