

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
}
export function createNode(props: Props) {
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
  if (props.onClick) node.onclick = props.onClick
  return node
}

// sleep (for async only)
export let sleep = (ms: number) => new Promise(t => setTimeout(t, ms))

// short for querySelector
export let $ = (node: string, index?: number) => {
  console.log(node)
  let el = Array.from(document.querySelectorAll(node)) as HTMLElement[]
  if(el.length < 1) console.error("error: this node doesn't exist !")
  let newEl: HTMLElement
  if(el.length === 1) newEl = el[0]
  else if(index) newEl = el[index]
  return newEl
}