document.addEventListener('DOMContentLoaded', () => {
  const tituloPrincipal = document.querySelector('h1');
  const subtituloPrincipal = document.querySelector('h2');

  const textoTitulo = tituloPrincipal.textContent;
  const textoSubtitulo = subtituloPrincipal.textContent;

  let indiceTitulo = 0;
  let indiceSubtitulo = 0;

  tituloPrincipal.textContent = "";
  subtituloPrincipal.textContent = "";

  function escreverTitulo() {
    if (indiceTitulo < textoTitulo.length) {
      tituloPrincipal.textContent += textoTitulo.charAt(indiceTitulo);
      indiceTitulo++;
      setTimeout(escreverTitulo, 100);
    } else {
      setTimeout(escreverSubtitulo, 300);
    }
  }

  function escreverSubtitulo() {
    if (indiceSubtitulo < textoSubtitulo.length) {
      subtituloPrincipal.textContent += textoSubtitulo.charAt(indiceSubtitulo);
      indiceSubtitulo++;
      setTimeout(escreverSubtitulo, 80);
    }
  }

  escreverTitulo();
});