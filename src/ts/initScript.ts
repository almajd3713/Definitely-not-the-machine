
import generators from "./base/nodeGen";
import pageManager from "./pageManager";
import craftInit from "./scripts/craftInit";
import resInit from "./scripts/resInit";
import { $ } from "./util";
import { craftCon } from "./base/variables"

export default (): void => {
  document.querySelector("body").appendChild(generators.menuGen("a"))
  pageManager()
  resInit()
  $("#pageCrafting").appendChild(generators.craftingGen(""));
  craftInit();

  ($(".menuItem", 1) as HTMLElement).click()

}