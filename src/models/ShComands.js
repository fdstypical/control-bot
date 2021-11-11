import cp from "child_process";

export default class ShComands {
  tornOff() {
    cp.exec("sh ./scripts/turn_off.sh", this.logExec);
  }

  lock() {
    cp.exec("sh ./scripts/lock.sh", this.logExec);
  }

  sleep() {
    cp.exec("sh ./scripts/sleep.sh", this.logExec);
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
