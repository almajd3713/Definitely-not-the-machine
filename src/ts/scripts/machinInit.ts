import { Item } from "../base/crafting"
import { Machine } from "../base/machines"
import { resourceCollection } from "../base/variables"


export default () => {
  let miner = new Machine(resourceCollection.findResource("miner") as Item, 2)
}