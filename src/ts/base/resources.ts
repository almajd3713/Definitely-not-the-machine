import { FixedLengthArray, sleep } from "../util";
import generators from "./nodeGen"


interface Resource {
  count: number
  codeName: string
  name: string
  processTime: number
}

export class RawResource implements Resource {
  hardness: number
  count = 0
  mineYield: number
  name: string = "placeholder"
  codeName: string = "pl4c3h0lder"
  processTime: number
  container: HTMLDivElement
  additionalInfoDisplay: boolean = false
  structure: {
    bar: HTMLProgressElement
    button: HTMLButtonElement
    amountDisplay: HTMLDivElement
    name: HTMLDivElement
    icon: HTMLSpanElement
    dropDownArrow: HTMLDivElement
    additionalInfoContainer: HTMLDivElement
  }
  constructor(name: FixedLengthArray<string, 2>, icon: string, hardness?: number, mineYield?: number, processTime?: number) {
    this.name = name[0]
    this.codeName = name[1]
    this.mineYield = mineYield || 1
    this.hardness = hardness || 1

    this.container = generators.resContainer([this.name, icon]) as HTMLDivElement
    this.structure = {
      bar: this.container.children[0].children[2] as HTMLProgressElement,
      button: this.container.children[0].children[4] as HTMLButtonElement,
      amountDisplay: this.container.children[0].children[3] as HTMLDivElement,
      name: this.container.children[0].children[0] as HTMLDivElement,
      icon: this.container.children[0].children[1] as HTMLSpanElement,
      dropDownArrow: this.container.children[1] as HTMLDivElement,
      additionalInfoContainer: this.container.children[2] as HTMLDivElement
    }
    this.processTime = this.hardness * processTime;

    (this.structure.bar as HTMLProgressElement).style.transition = `all ${this.processTime}s`
    this.structure.button.addEventListener("click", () => this.cycle())
    this.structure.dropDownArrow.addEventListener("click", () => this.dropDownToggle())
  }
  cycle() {
    processCycle(this.processTime, this.structure.button, this.structure.bar, () => this.generate())
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
}

let processCycle = async(processTime: number, button: HTMLButtonElement, bar: HTMLProgressElement, callback: () => void) => {
  button.disabled = true
  let percent = 0
  if(bar.classList.contains("notransition")) bar.classList.remove(("notransition"))
  for(let i = 0; i < 100; i++) {
    percent += 1
    bar.value = percent
    await sleep(processTime * 10)
  }
  await sleep(500)
  bar.classList.add("notransition")
  callback();
  await sleep(500);
  button.disabled = false
}