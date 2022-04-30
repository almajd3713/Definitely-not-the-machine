import { Item } from "../base/crafting";
import generators from "../base/nodeGen";
import { $ } from "../util";

export default () => {
  let btns = Array.from(document.querySelectorAll(".craftingTabButton")) as HTMLElement[]
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(btn => btn.classList.toggle("selected", false))
      btn.classList.add("selected")
    })
  })
  
  btns[0].click()


  let item1 = new Item({
    name: "Pickaxe",
    codeName: "pickaxe",
    icon: "../../svg/pickaxe.svg",
    countable: [false],
    craftable: [true],
    desc: "Wood planks, very simple material that can be used for a lot of thigns."
  })
  item1.init()
}

