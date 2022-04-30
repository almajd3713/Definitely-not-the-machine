import { RawResource } from "../base/resources"
import Svgs from "../../loader"
import { $ } from "../util"
let gameContainer = $("#pageMining") as HTMLDivElement


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

export default () => {
  craft1.init(gameContainer)
  craft2.init(gameContainer)
  craft3.init(gameContainer)
  craft4.init(gameContainer)
  craft5.init(gameContainer)
}