import "./scss/index.scss"
import { RawResource } from "./ts/base/resources"
import Svgs from "./loader"

let craft1 =  new RawResource({
  name: ["Wood", "wood"],
  icon: Svgs.find(_ => _.includes("wood")),
  processBase: 8
})
let craft2 = new RawResource({
  name: ["Stone", "stone"],
  icon: Svgs.find(_ => _.includes("wood")),
  processBase: 15
})
let gameContainer: HTMLDivElement = document.querySelector(".container")

gameContainer.appendChild(craft1.container)
gameContainer.appendChild(craft2.container)

