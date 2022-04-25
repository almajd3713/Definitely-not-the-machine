import { FixedLengthArray } from "../util"

interface Machine {
  count: number
  name: string
  codeName: string
  processingModifier?: number
  power?: number
}

export class Miner implements Machine {
  count: number = 0
  name: string
  codeName: string
  power?: number
  constructor(name: FixedLengthArray<string, 2>, icon: string, power: number) {
    this.name = name[0]
    this.codeName = name[1]
    this.power = power
  }
}