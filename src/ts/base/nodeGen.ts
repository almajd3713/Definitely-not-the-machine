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
            textContent: "Available: 0"
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
            className: "infoPart",
            subNodes: [
              {
                tag: "button",
                className: "autoBtn",
                textContent: "Add Miner"
              },
              {
                tag: "button",
                className: "autoBtn",
                textContent: "Remove Miner"
              },
              {
                className: "automatonDisplay",
                textContent: "0 Miners are working right now"
              },
              {
                className: "automatonDisplay",
                textContent: "Production is 0 items/s"
              }
            ]
          }, {
            className: "infoPart"
          }
        ]
      }
    ]
  })
}

generators.menuGen = () => {
  return createNode({
    className: "menuWrapper",
    subNodes: [{
      className: "menu",
      subNodes: [
        {
          className: "menuItem",
          textContent: "Resources"
        }, {
          className: "menuItem",
          textContent: "Crafting"
        }, {
          className: "menuItem",
          textContent: "Map"
        }
      ]
    }]
  })
}

export default generators