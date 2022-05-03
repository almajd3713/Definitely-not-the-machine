import { $ } from "../util";
import { Item } from "./crafting";
import { RawResource } from "./resources";

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