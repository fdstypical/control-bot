import path from "path";
import cp from "child_process";
import { config } from "../../configs/index.js";

export default class ShComands {
  #turn_off;
  #sleep;
  #lock;

  constructor({ turn_off, sleep, lock }) {
    this.#turn_off = path.join(config.SCRIPTS_DIR, turn_off);
    this.#sleep = path.join(config.SCRIPTS_DIR, sleep);
    this.#lock = path.join(config.SCRIPTS_DIR, lock);
  }

  tornOff() {
    cp.exec(`sh ${this.#turn_off}`, this.logExec);
  }

  sleep() {
    cp.exec(`sh ${this.#sleep}`, this.logExec);
  }

  lock() {
    cp.exec(`sh ${this.#lock}`, this.logExec);
  }

  logExec(error, stdout, stderr) {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
}
