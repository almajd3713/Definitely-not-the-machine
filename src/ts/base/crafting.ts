 
import { FixedLengthArray } from "../util";
import generators from "./nodeGen";
import {$} from "../util"



interface ItemInitInterface {
  name: string, codeName: string, icon: string, desc: string, craftable: ItemInterface["craftable"], countable: ItemInterface["countable"]
}

interface ItemInterface {
  name: string
  codeName: string
  icon: string
  desc: string
  craftable: [isCraftable: boolean, ingredients?: [item: Item, count: number][]]
  container: HTMLElement
  countable: [isCountable: boolean, count?: number]
  durability?: number
  fullDurability?: number
}
interface itemController {
  name: HTMLElement
  icon: HTMLImageElement
  desc: HTMLElement
}
export class Item implements ItemInterface{
  name: string
  codeName: string
  icon: string
  desc: string
  container: HTMLElement
  itemManager: itemController;
  countable: [isCountable: boolean, count?: number];
  craftable: [isCraftable: boolean, ingredients?: [item: Item, count: number][]];
  itemContainer = $("#selectContainer");
  infoContainer = $("#infoContainer");

  constructor(props: ItemInitInterface) {
    ({name: this.name, codeName: this.codeName,icon: this.icon,craftable: this.craftable, countable: this.countable, desc: this.desc} = props)
    this.container = generators.itemGen1("");
    (this.container.children[0] as HTMLImageElement).src = this.icon
    this.container.children[1].textContent = this.name
    this.infoContainer.appendChild(generators.itemGen2(""));
    this.itemManager = {
      name: this.infoContainer.querySelector(".infoName"),
      icon: this.infoContainer.querySelector(".infoIcon"),
      desc: this.infoContainer.querySelector(".infoDesc")
    }
    this.container.addEventListener("click", () => this.displayInfo(this.itemManager))
  }

  get count() {
    if(this.countable[0]) return this.countable[1]
    else console.error(`Err: ${this.codeName} is not countable !`)
  }
  set count(val: number) {
    // if(this.countable[0] && this.countable[1] === 0 && val > 0) {
    //   itemContainer.appendChild(this.container)
    // } else if (this.countable && this.countable[1] - val === 0) {
    //   this.container.remove()
    // } else if(!this.countable[0]) {
    //   console.error(`${this.codeName} is not countable !`)
    // } 
  }
  init() {
    this.itemContainer.appendChild(this.container)
  }
  private displayInfo(manager: itemController) {
    manager.name.textContent = this.name
    manager.icon.src = this.icon
    manager.desc.textContent = this.desc
  }
}

class Tool extends Item {
  durability: number
  fullDurability: number
}