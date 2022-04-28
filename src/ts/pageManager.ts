

export default () => {
  let pages = Array.from(document.querySelector(".container").children)
  let buttons = Array.from(document.querySelectorAll(".menuItem"))
  
  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => pageSelector(pages as HTMLElement[], i))
  })
}

let pageSelector = (pages: HTMLElement[], id: number) => {
  switch(id) {
    case 0:
      pages[0].style.left = "0"
      pages[1].style.left = "100vw"
      pages[2].style.left = "200vw"
      break
    case 1:
      pages[0].style.left = "-100vw"
      pages[1].style.left = "0"
      pages[2].style.left = "100vw"
      break
    case 2:
      pages[0].style.left = "-200vw"
      pages[1].style.left = "-100vw"
      pages[2].style.left = "0"
  }
}