import path from "path";
import cp from "child_process";
import { promisify } from "util";
import { config } from "../../configs/index.js";

const exec = promisify(cp.exec);

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
    return new Promise((resolve, reject) => {
      exec(`sh ${this.#turn_off}`).then(({ stdout, stderr }) =>
        stderr ? reject(new Error(stderr)) : resolve(stdout)
      );
    });
  }

  sleep() {
    return new Promise((resolve, reject) => {
      exec(`sh ${this.#sleep}`).then(({ stdout, stderr }) =>
        stderr ? reject(new Error(stderr)) : resolve(stdout)
      );
    });
  }

  lock() {
    return new Promise((resolve, reject) => {
      exec(`sh ${this.#lock}`).then(({ stdout, stderr }) =>
        stderr ? reject(new Error(stderr)) : resolve(stdout)
      );
    });
  }
}
