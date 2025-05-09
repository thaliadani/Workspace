function tocaSom(idElementoAudio) {
  const elementoAudio = document.querySelector(idElementoAudio);
  if (elementoAudio) {
    elementoAudio.play();
  } else {
    console.error(`Elemento com o seletor "${idElementoAudio}" não encontrado.`);
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (const tecla of listaDeTeclas){
    const instumento = tecla.classList[1];
    const idAudio = `#som_${instumento}`; // template string
    tecla.onclick = function () {
        tocaSom(idAudio);
      };
}

