import { FixedLengthArray, sleep } from "../util";
import { Miner } from "./machines";
import generators from "./nodeGen"


interface Resource {
  count: number
  codeName: string
  name: string
  processBase: number
}

interface RawResourceConstructor {
  name: FixedLengthArray<string, 2>
  icon: string
  hardness?: number
  mineYield?: number
  processBase?: number
}

interface resourceStructure {
  bar: HTMLProgressElement
  button: HTMLButtonElement
  amountDisplay: HTMLDivElement
  name: HTMLDivElement
  icon: HTMLSpanElement
  dropDownArrow: HTMLDivElement
  additionalInfoContainer: HTMLDivElement
  minerManager: { addMiner: HTMLButtonElement, removeMiner: HTMLButtonElement }
  automationDisplay: HTMLDivElement
  productionDisplay: HTMLDivElement
}

export class RawResource implements Resource {
  hardness?: number = 1
  count = 0
  mineYield?: number = 1
  name: string = "placeholder"
  codeName: string = "pl4c3h0lder"
  processBase: number
  isAutomated: boolean = false
  miner: Miner | undefined
  container: HTMLDivElement
  additionalInfoDisplay: boolean = false
  structure: resourceStructure

  constructor(props: RawResourceConstructor) {
    this.name = props.name[0]
    this.codeName = props.name[1]
    this.mineYield = props.mineYield || 1
    this.hardness = props.hardness || 1
    this.processBase = props.processBase

    this.container = generators.resContainer([this.name, props.icon]) as HTMLDivElement
    let resourceInfo = this.container.children[0]
    this.structure = {
      bar: resourceInfo.children[2] as HTMLProgressElement,
      button: resourceInfo.children[4] as HTMLButtonElement,
      amountDisplay: resourceInfo.children[3] as HTMLDivElement,
      name: resourceInfo.children[0] as HTMLDivElement,
      icon: resourceInfo.children[1] as HTMLSpanElement,
      dropDownArrow: this.container.children[1] as HTMLDivElement,
      additionalInfoContainer: this.container.children[2] as HTMLDivElement,
      minerManager: {
        addMiner: this.container.children[2].querySelectorAll(".autoBtn")[0] as HTMLButtonElement,
        removeMiner: this.container.children[2].querySelectorAll(".autoBtn")[1] as HTMLButtonElement
      },
      automationDisplay: this.container.querySelectorAll(".automatonDisplay")[0] as HTMLDivElement,
      productionDisplay: this.container.querySelectorAll(".automatonDisplay")[1] as HTMLDivElement
    };

    (this.structure.bar as HTMLProgressElement).style.transition = `all ${this.processBase}s`



    this.structure.button.addEventListener("click", () => this.cycleManual())
    this.structure.dropDownArrow.addEventListener("click", () => this.dropDownToggle())
    this.structure.minerManager.addMiner.addEventListener("click", () => this.minerManager("add"))
    this.structure.minerManager.removeMiner.addEventListener("click", () => this.minerManager("remove"))
  }
  cycleManual() {
    processCycle(this.processTime([""]), this.structure.bar, () => this.generate(), this.structure.button)
  }
  private async cycleAutomated() {
    if(this.isAutomated) {
      await processCycle(this.processTime(["automation"]), this.structure.bar, () => this.generate())
      this.cycleAutomated()
    } 
  }
  private generate() {
    this.count += this.mineYield;
    this.structure.bar.value = 0;
    this.structure.amountDisplay.textContent = `Available: ${this.count}`
  }
  private dropDownToggle() {
    this.additionalInfoDisplay = !this.additionalInfoDisplay
    this.structure.dropDownArrow.style.transform = `scaleY(${this.additionalInfoDisplay ? "-1" : "1"})`
    this.structure.additionalInfoContainer.style.height = `${this.additionalInfoDisplay ? "20rem" : "0"}`
  }
  private minerManager(inp: string) {
    if(inp === "add") {
      if(!this.miner) {
        this.miner = new Miner(["Automaton", "automaton"], "./svg/wood.svg", 0.5)
        this.structure.button.disabled = true
      }
      this.miner.count += 1
      this.refresh(["display", "automation"])
    } else if(inp === "remove") {
      if(this.miner) {
        if(this.miner.count === 1) {
          this.miner.count -= 1
          this.refresh(["display"])
          this.miner = undefined
          this.refresh(["automation"])
        }
      }
    }
  }

  private refresh(kind: ("display" | "automation" | "all")[]) {
    kind.forEach(k => {
      if (k === "display") {
        this.structure.amountDisplay.textContent = `Amount: ${this.count}`
        this.structure.automationDisplay.textContent = `${this.miner.count} Miners are working right now`
        this.structure.productionDisplay.textContent = `Current production level is boom`
      } else if(k === "automation") {
        if(this.miner) this.isAutomated = true
        else this.isAutomated = false
        this.cycleAutomated()
      }
    })
  }
  private processTime(modifier?: ("automation" | "")[]) {
    let time = this.processBase / this.hardness
    modifier.forEach(mod => {
      if(mod === "automation") {
        time = time - (this.miner.count * this.miner.power * (time / 50))
      }
    })
    return time
  }
}

let processCycle = async (processTime: number, bar: HTMLProgressElement, callback: () => void, button?: HTMLButtonElement ) => {
  if(button) {button.disabled = true}
  let percent = 0
  if (bar.classList.contains("notransition")) bar.classList.remove(("notransition"))
  for (let i = 0; i < 100; i++) {
    percent += 1
    bar.value = percent
    await sleep(processTime * 10)
  }
  await sleep(500)
  bar.classList.add("notransition")
  callback();
  await sleep(500);
  if(button) {button.disabled = false}
}