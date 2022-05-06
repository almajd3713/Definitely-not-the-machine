import { sleep } from "../util";
import { Machine } from "./machines";
import generators from "./nodeGen"
import { resourceCollection } from "./variables";


interface Resource {
  count: number
  codeName: string
  name: string
  processBase: number
}

interface RawResourceConstructor {
  name: string
  codeName: string
  icon: string
  hardness?: number
  mineYield?: number
  processBase?: number
  automator: Machine
}

interface resourceStructure {
  bar: HTMLProgressElement
  button: HTMLButtonElement
  amountDisplay: HTMLDivElement
  name: HTMLDivElement
  icon: HTMLSpanElement
  dropDownArrow: HTMLDivElement
  additionalInfoContainer: HTMLDivElement
  automator: { addAutomator: HTMLButtonElement, removeAutomator: HTMLButtonElement }
  automationDisplay: HTMLDivElement
  productionDisplay: HTMLDivElement
}

export class RawResource implements Resource {
  hardness?: number
  count = 0
  mineYield?: number
  name: string = "placeholder"
  codeName: string = "pl4c3h0lder"
  processBase: number
  automator: Machine
  container: HTMLDivElement
  additionalInfoDisplay: boolean = false
  structure: resourceStructure
  icon: string

  constructor(props: RawResourceConstructor) {
    ({name: this.name, codeName: this.codeName, mineYield: this.mineYield, hardness: this.hardness, processBase: this.processBase, icon: this.icon, automator: this.automator} = props)
    if (!this.mineYield) this.mineYield = 1
    if (!this.hardness) this.hardness = 1
    this.container = generators.resContainer([this.name, this.icon]) as HTMLDivElement
    let resourceInfo = this.container.children[0]
    this.structure = {
      bar: resourceInfo.children[2] as HTMLProgressElement,
      button: resourceInfo.children[4] as HTMLButtonElement,
      amountDisplay: resourceInfo.children[3] as HTMLDivElement,
      name: resourceInfo.children[0] as HTMLDivElement,
      icon: resourceInfo.children[1] as HTMLSpanElement,
      dropDownArrow: this.container.children[1] as HTMLDivElement,
      additionalInfoContainer: this.container.children[2] as HTMLDivElement,
      automator: {
        addAutomator: this.container.children[2].querySelectorAll(".autoBtn")[0] as HTMLButtonElement,
        removeAutomator: this.container.children[2].querySelectorAll(".autoBtn")[1] as HTMLButtonElement
      },
      automationDisplay: this.container.querySelectorAll(".automatonDisplay")[0] as HTMLDivElement,
      productionDisplay: this.container.querySelectorAll(".automatonDisplay")[1] as HTMLDivElement
    };

    (this.structure.bar as HTMLProgressElement).style.transition = `all ${this.processBase}s`



    this.structure.button.addEventListener("click", () => this.processCycle("manual", 0))
    this.structure.dropDownArrow.addEventListener("click", () => this.dropDownToggle())
    this.structure.automator.addAutomator.addEventListener("click", () => this.autoManager("add"))
    this.structure.automator.removeAutomator.addEventListener("click", () => this.autoManager("remove"))

    resourceCollection.addResource(this)
  }
  init(container: HTMLElement | Element) {
    container.appendChild(this.container)
  } 
  private generate() {
    this.structure.bar.value = 0;
    this.count += this.mineYield;
    this.structure.amountDisplay.textContent = `Available: ${this.count}`
  }
  private dropDownToggle() {
    this.additionalInfoDisplay = !this.additionalInfoDisplay
    this.structure.dropDownArrow.style.transform = `scaleY(${this.additionalInfoDisplay ? "-1" : "1"})`
    this.structure.additionalInfoContainer.style.height = `${this.additionalInfoDisplay ? "20rem" : "0"}`
  }
  private _isAutomated: number = 0
  get isAutomated(): number {
    return this._isAutomated
  }
  set isAutomated(val) {
    this._isAutomated = val
    if(this.automator) this.processCycle("auto", this.isAutomated)
    this.refresh(["display"])
  }
  private autoManager(inp: string) {
    if(inp === "add") {
      this.automator.itemRef.count = 1
      this.isAutomated += 1
    }
    else if(inp === "remove") {
      if(this.isAutomated !== 0) {this.isAutomated -= 1; this.automator.itemRef.countable[1] -= 1}
    }
  }

  private refresh(kind: ("display" | "automation" | "all")[]) {
    kind.forEach(k => {
      if (k === "display") {
        this.structure.amountDisplay.textContent = `Available: ${this.count}`
        this.structure.automationDisplay.textContent = `${this.isAutomated} Miners are working right now`
        this.structure.productionDisplay.textContent = `Current production level is boom`
      } else if(k === "automation") {
        if(this.automator) {
          // this.isAutomated = true
          // this.cycleAutomated()
        }
      }
    })
  }
  private processTime(modifier?: ("automation" | "")[]) {
    let time = this.processBase / this.hardness
    modifier.forEach(mod => {
      if(mod === "automation") {
        time = time - (this.automator.itemRef.count * this.automator.power * (time /25  ))
      }
    })
    return time
  }
  
  private async processCycle(mode: "manual" | "auto", machineCount: number) {
    let btn = this.structure.button, bar = this.structure.bar
    btn.disabled = true
    if(mode === "manual") {
      for(let i = 0; i < 100; i++) {
        if(this._isAutomated) {bar.value = 0; return 0}
        bar.value += 1
        await sleep(this.processTime([""]) * 10)
      }
      await sleep(500)
      this.generate()
      bar.value = 0; btn.disabled = false
    }
    else if(mode === "auto") {
      console.log(this.processTime(["automation"]))
      if(this.processTime(["automation"]) > 1) {
        for (let i = 0; i < 100; i++) {
          if (!this._isAutomated || this.isAutomated !== machineCount) { bar.value = 0; btn.disabled = false; return 0 }
          bar.value += 1
          await sleep(this.processTime(["automation"]) * 10)
        }
        this.generate()
        if (this.isAutomated) this.processCycle("auto", machineCount)
      } else {
        if (!this._isAutomated || this.isAutomated !== machineCount) { 
          bar.value = 0; btn.disabled = false; return 0 
        }
        bar.value = 100
        await sleep(this.processTime(["automation"]) * 1000)
        this.generate()
        if(this.isAutomated) this.processCycle("auto", machineCount)
      }
    }
  }
}
