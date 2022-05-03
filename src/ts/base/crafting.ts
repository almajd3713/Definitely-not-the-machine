 
import { createNode, FixedLengthArray } from "../util";
import generators from "./nodeGen";
import {$} from "../util"
import {resourceCollection} from "./variables"


interface ItemInitInterface {
  name: string, codeName: string, icon: string, desc: string, craftable: ItemInterface["craftable"], countable: ItemInterface["countable"]
}

interface ItemInterface {
  name: string
  codeName: string
  icon: string
  desc: string
  craftable: [isCraftable: boolean, ingredients?: [item: string, count: number][]]
  container: HTMLElement[]
  countable: [isCountable: boolean, count: number]
  durability?: number
  fullDurability?: number
}
interface itemController {
  name: HTMLElement
  icon: HTMLImageElement
  desc: HTMLElement
  craftBtn: HTMLButtonElement
}
export class Item implements ItemInterface{
  name: string
  codeName: string
  icon: string
  desc: string
  container: HTMLElement[] = []
  itemManager: itemController;
  countable: [isCountable: boolean, count: number] 
  craftable: [isCraftable: boolean, ingredients?: [item: string, count: number][]];
  itemContainer = $("#inventoryCont");
  craftContainer = $("#craftingCont");
  infoContainer = $("#infoContainer");

  constructor(props: ItemInitInterface) {
    this.assignVarsAndEvents(props)
    this.assignEventListeners()
    this.changeTab("invent")
    resourceCollection.addResource(this)
  }

  get count() {
    if(this.countable[0]) return this.countable[1]
    else console.error(`Err: ${this.codeName} is not countable !`)
  }
  set count(val: number) {
    this.countable[1] += val
  }
  private assignVarsAndEvents(props: ItemInitInterface) {
    ({ name: this.name, codeName: this.codeName, icon: this.icon, craftable: this.craftable, countable: this.countable, desc: this.desc } = props)
    if(this.craftable[0] && !this.craftable[1]) throw new Error(`Err: ${this.codeName} is craftable, but no ingredients are present`)
    this.container[0] = generators.itemGen1("");
    this.countable = props.countable
    this.container[1] = this.container[0].cloneNode(true) as HTMLElement
    this.container.forEach(cont => (cont.children[0] as HTMLImageElement).src = this.icon)
    this.container[0].children[1].textContent = this.name
    this.container[1].children[1].textContent = "Craft"
    this.itemManager = {
      name:     this.infoContainer.querySelector(".infoName"),
      icon:     this.infoContainer.querySelector(".infoIcon"),
      desc:     this.infoContainer.querySelector(".infoDesc"),
      craftBtn: this.infoContainer.querySelector(".craftProcessBtn") as HTMLButtonElement
    }
    this.refresh("all")
  }
  private assignEventListeners() {
    this.container[0].addEventListener("click", () => this.displayInfo(this.itemManager, 0))
    this.container[1].addEventListener("click", () => this.displayInfo(this.itemManager, 1))
    $(".craftingTabButton", 0).addEventListener("click", () => this.changeTab("invent"))
    $(".craftingTabButton", 1).addEventListener("click", () => this.changeTab("craft"))
    this.itemManager.craftBtn.addEventListener("click", () => this.craftCycle(this.craftable[1]))
  }
  init() {
    this.itemContainer.appendChild(this.container[0])
    if(this.craftable[0]) this.craftContainer.appendChild(this.container[1])
  }
  private displayInfo(manager: itemController, type: 0 | 1) {
    if(type === 0) {
      manager.name.textContent = this.name
      manager.icon.src = this.icon
      manager.desc.textContent = this.desc
      $(".infoCraftWrapper").style.display = "none"
      $(".infoInfoWrapper").style.display = "initial"
      
    } else if(type === 1) {
      if($(".craftComponent")) {
        Array.from(document.querySelectorAll(".craftComponent")).forEach(_ => _.remove())
      }
      $(".infoCraftWrapper").style.display = "initial"
      this.makeCraftComponents().forEach(item => {
        $(".infoCraftWrapper").insertBefore(item, this.itemManager.craftBtn)
      })
      $(".infoInfoWrapper").style.display = "none"
    }
  (this.infoContainer.children[0] as HTMLElement).style.display = "none"
  }
  private changeTab(inp: "invent" | "craft") {
    $(".infoInfoWrapper").style.display = "none"
    $(".infoCraftWrapper").style.display = "none"
    switch (inp) {
      case "invent":
        $("#craftingCont").style.display = "none"
        $("#inventoryCont").style.display = "grid"
        break;
      case "craft":
        $("#craftingCont").style.display = "grid"
        $("#inventoryCont").style.display = "none"
        break;
    }
    (this.infoContainer.children[0] as HTMLElement).style.display = "block"
  }

  private craftCycle(ingredients: ItemInterface["craftable"][1]) {
    let missingItem = ""
    let canAfford = ingredients.every((item) => {
      let res = resCode(item[0])
      if (res && res.codeName === item[0]) {
        if(res.count >= item[1]) {
          res.count -= item[1]
          return true
        }
        else {
          missingItem = item[0]
          return false
        }
      }

    })
    let alert = $(".craftAlert")
    if(canAfford) {
      // this next line makes no sense, bear it, any edit will break it.
      this.count = 1
      this.refresh("all")
      alert.textContent = "Crafted Successfully!"
      alert.style.backgroundColor = "#2a9726"
      alert.style.opacity = "1"
      setTimeout(() => {
        alert.style.opacity = "0"
      }, 1000);
    } else {
      alert.textContent = `Cannot afford crafting: missing ${missingItem}`
      alert.style.backgroundColor = "#c64e4e"
      alert.style.opacity = "1"
      setTimeout(() => {
        alert.style.opacity = "0"
      }, 1000);
    }
  }
  refresh(type: "inventory" | "crafting" | "all") {
    switch (type) {
      case "inventory": case "all":
        $(".inventAmount").textContent = `Current Amount: ${this.count}`
      case "crafting": case "all":
      
    }
  }

  private makeCraftComponents() {
    let arr: HTMLElement[] = []
    this.craftable[1].forEach((ingredient) => {
      let item = resourceCollection.findResource(ingredient[0])
      arr.push(createNode({
        className: "craftComponent",
        subNodes: [
          {
            tag: "img",
            className: "craftCompIcon",
            src: item.icon
          }, {
            tag: "span",
            className: "craftCompText",
            textContent: `${item.name} x${ingredient[1]}`
          }
        ]
      }))
    })
    return arr
  }
}

class Tool extends Item {
  durability: number
  fullDurability: number
}

let resCode = (item: string) => {
  return resourceCollection.findResource(item)
}