import { FixedLengthArray } from "../util"
import { Item } from "./crafting"
import { machineCollection } from "./variables"

interface MachineInterface {
  count: number
  name: string
  codeName: string
  processingModifier?: number
  power?: number
}

// export class Miner implements MachineInterface {
//   count: number = 0
//   name: string
//   codeName: string
//   power?: number
//   constructor(name: FixedLengthArray<string, 2>, icon: string, power: number) {
//     this.name = name[0]
//     this.codeName = name[1]
//     this.power = power
//   }
// }

export class Machine {
  itemRef: Item
  power: number
  constructor(itemRef: Item, power: number) {
    this.itemRef = itemRef
    this.power = power
    machineCollection.addResource(this)
  }
}