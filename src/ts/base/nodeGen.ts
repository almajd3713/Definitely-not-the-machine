import { createNode } from "../util"

type generator = (value: string | string[]) => HTMLElement;
interface genInterface<Gen extends generator> {
  [index: string]: Gen
}

let generators: genInterface<generator> = {}

generators.resContainer = ([name, icon]: string[]) => {
  return createNode({
    className: "resourceGen",
    subNodes: [
      {
        className: "resourceFlex",
        subNodes: [
          {
            className: "resName",
            textContent: name
          },
          {
            tag: "img",
            className: "resourceIcon",
            src: icon
          },
          {
            tag: "progress",
            className: "progressBar",
            attributes: [["value", "0"], ["max", "100"]]
          },
          {
            className: "amountDisplay",
            textContent: "Amount: 0"
          },
          {
            tag: "button",
            className: "craftBtn",
            textContent: "Craft !"
          }
        ]
      }, {
        className: "dropDownArrow",
        tag: "img",
        src: "./svg/down_arrow.svg"
      },
      {
        className: "additionalInfo",
        subNodes: [
          {
            
          }
        ]
      }
    ]
  })
}

export default generators