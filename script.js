function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}

  //pegar a tag image
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver o light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Ellipse-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
