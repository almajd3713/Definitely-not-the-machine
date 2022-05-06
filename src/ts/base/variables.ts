import { $ } from "../util";
import { Item } from "./crafting";
import { RawResource } from "./resources";
import { Machine } from "./machines";
import generators from "./nodeGen";

type resourceTypes = Item | RawResource
export let resourceCollection = (() => {
  let value: resourceTypes[] = []
  let addResource = (res: resourceTypes) => {value.push(res)}
  let findResource = (codeName: string) => {
    return value.find(el => el.codeName === codeName)
  }
  return {
    "value": value,
    "addResource": addResource,
    "findResource": findResource
  }
})()
export let machineCollection = (() => {
  let value: Machine[] = []
  let addResource = (res: Machine) => { value.push(res) }
  let findResource = (codeName: string) => {
    return value.find(el => el.itemRef.codeName === codeName)
  }
  return {
    "value": value,
    "addResource": addResource,
    "findResource": findResource
  }
})()
export let craftingPage = generators.craftingGen("")
export let itemContainer: HTMLElement= craftingPage.querySelector("#inventoryCont");
export let craftContainer: HTMLElement= craftingPage.querySelector("#craftingCont");
export let infoContainer: HTMLElement= craftingPage.querySelector("#infoContainer");
