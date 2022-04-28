
import generators from "./base/nodeGen";
import { RawResource } from "./base/resources";
import Svgs from "../loader"
import pageManager from "./pageManager";

let gameContainer: HTMLDivElement = document.querySelector("#pageMining")

export default (): void => {

  document.querySelector("body").appendChild(generators.menuGen("a"))
  pageManager()

  let craft1 = new RawResource({
    name: ["Wood", "wood"],
    icon: Svgs.find(_ => _.includes("wood")),
    processBase: 8
  })
  let craft2 = new RawResource({
    name: ["Stone", "stone"],
    icon: Svgs.find(_ => _.includes("stone")),
    processBase: 15
  })
  let craft3 = new RawResource({
    name: ["Stone", "stone"],
    icon: Svgs.find(_ => _.includes("stone")),
    processBase: 15
  })
  let craft4 = new RawResource({
    name: ["Stone", "stone"],
    icon: Svgs.find(_ => _.includes("stone")),
    processBase: 15
  })
  let craft5 = new RawResource({
    name: ["Stone", "stone"],
    icon: Svgs.find(_ => _.includes("stone")),
    processBase: 15
  })
  craft1.init(gameContainer)
  craft2.init(gameContainer)
  craft3.init(gameContainer)
  craft4.init(gameContainer)
  craft5.init(gameContainer)
}