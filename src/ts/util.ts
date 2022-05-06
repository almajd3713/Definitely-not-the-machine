

// array with fixed length
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift'
export type FixedLengthArray<T, L extends number, TObj = [T, ...Array<T>]> =
  Pick<TObj, Exclude<keyof TObj, ArrayLengthMutationKeys>>
  & {
    readonly length: L
    [I: number] : T
    [Symbol.iterator]: () => IterableIterator<T>
}

// create new element
interface Props {
  tag?: string
  className?: string | string[]
  id?: string
  src?: string
  attributes?: Array<FixedLengthArray<string, 2>>
  textContent?: string
  subNodes?: Props | Props[]
  onClick?: () => void
  style?: Partial<CSSStyleDeclaration>
}
export function createNode(props: Props): HTMLElement {
  let node = document.createElement(props.tag || "div")
  if (props.className) {
    if (Array.isArray(props.className)) props.className.forEach(classN => node.classList.add(classN))
    else node.className = props.className
  }
  if (props.id) { node.setAttribute("id", props.id) }
  if (props.src) { node.setAttribute("src", props.src) }
  if (props.attributes) {
    props.attributes.forEach(attr => {
      node.setAttribute(attr[0], attr[1])
    })
  }
  if (props.textContent) { node.innerHTML = props.textContent }
  if (props.subNodes) {
    if (props.subNodes instanceof HTMLElement) node.appendChild(props.subNodes)
    else if (Array.isArray(props.subNodes)) props.subNodes.forEach(subNode => {
      if (subNode instanceof HTMLElement) node.appendChild(subNode)
      else node.appendChild(createNode(subNode))
    }); else node.appendChild(createNode(props.subNodes))
  }
  if(props.style) for(let prop in props.style) {
    node.style[prop] = props.style[prop]
  }
  if (props.onClick) node.onclick = props.onClick
  return node
}

// sleep (for async only)
export let sleep = (ms: number) => new Promise(t => setTimeout(t, ms))

// short for querySelector
export let $ = (node: string, index?: number) => {
  let el = Array.from(document.querySelectorAll(node)) as HTMLElement[]
  if(el.length < 1) {
    console.error("no such node exists")
    return null
  }
  let newEl: HTMLElement
  newEl = el[index || 0]
  return newEl
}