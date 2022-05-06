import { Item } from "../base/crafting";
import generators from "../base/nodeGen";
import { resourceCollection } from "../base/variables";
import { $, createNode } from "../util";



export default () => {
  let item1 = new Item({
    name: "Pickaxe",
    codeName: "pickaxe",
    icon: "../../svg/pickaxe.svg",
    countable: [true, 2],
    craftable: [true, [
      ["wood", 2],
    ]],
    desc: "Wood planks, very simple material that can be used for a lot of thigns."
  })
  let minerRes = new Item({
    name: "Mining Drill",
    codeName: "miner",
    icon: "../../svg/drill.svg",
    countable: [true, 0],
    craftable: [true, [
      ["wood", 4]
    ]],
    desc: "Drills stuff....of course...."
  })
  let btns = Array.from(document.querySelectorAll(".craftingTabButton")) as HTMLElement[]
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(btn => btn.classList.toggle("selected", false))
      btn.classList.add("selected")
    })
  })
  
  btns[0].click()
  $("#infoContainer").appendChild(createNode({
    style: {
      color: "#0b7709",
      fontSize: "2rem"
    },
    textContent: "Click on any item Item to view it..."
  }));

  item1.init()
  minerRes.init()
}

