import "./scss/index.scss"
import { RawResource } from "./ts/base/resources"
import Svgs from "./loader"

let craft1 =  new RawResource(
  ["Wood", "wood"],
  Svgs.find(_ => _.includes("wood")),
  undefined,
  undefined,
  8
)
let craft2 = new RawResource(
  ["Stone", "stone"],
  Svgs.find(_ => _.includes("wood")),
  undefined,
  undefined,
  16
)
let gameContainer: HTMLDivElement = document.querySelector(".container")

gameContainer.appendChild(craft1.container)
gameContainer.appendChild(craft2.container)

