function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a tag img
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    // se tiver lightmode, adicionar a imagem light
    img.setAttribute('src', './assets/Avatar-light.png')// esta função modifica um atributo
      
  } else {
    // se tiver darkmode, adicionar a imagem dark
    img.setAttribute('src', './assets/Avatar.png')
  }    
}