import { Item } from "../base/crafting";
import generators from "../base/nodeGen";
import { resourceCollection } from "../base/variables";
import { $, createNode } from "../util";

export default () => {
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
  $("#infoContainer").appendChild(generators.itemGen2(""));

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
  item1.init()
  // let item2 = new Item({
  //   name: "Axe",
  //   codeName: "axe",
  //   icon: "../../svg/wood.svg",
  //   countable: [false],
  //   craftable: [false],
  //   desc: "Nice tool, used to cut trees."
  // })
  // item2.init()

  console.log(resourceCollection)
}

