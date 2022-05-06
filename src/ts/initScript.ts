
import pageInit from "./scripts/pageInit";
import craftInit from "./scripts/craftInit";
import machinInit from "./scripts/machinInit";
import resInit from "./scripts/resInit";
import { $ } from "./util";

export default (): void => {
  pageInit();
  craftInit();
  machinInit();
  resInit();
}