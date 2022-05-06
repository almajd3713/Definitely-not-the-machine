import { RawResource } from "../base/resources"
import Svgs from "../../loader"
import { $ } from "../util"
import { machineCollection, resourceCollection } from "../base/variables"
let gameContainer = $("#pageMining") as HTMLDivElement





export default () => {
  let craft1 = new RawResource({
    name: "Wood",
    codeName: "wood",
    icon: Svgs.find(_ => _.includes("wood")),
    processBase: 8,
    automator: machineCollection.findResource("miner")
  })
  let craft2 = new RawResource({
    name: "Stone",
    codeName: "stone",
    icon: Svgs.find(_ => _.includes("stone")),
    automator: machineCollection.findResource("miner"),
    processBase: 15
  })
  
  craft1.init(gameContainer)
  craft2.init(gameContainer)
}