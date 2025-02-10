
import { uuidv7 } from "uuidv7";

export class Utils {

  static generaIdUnico() {
    const uuid = uuidv7();
    return uuid;
  }

}
