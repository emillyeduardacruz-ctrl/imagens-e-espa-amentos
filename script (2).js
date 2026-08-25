// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  const btnCurtir = document.getElementById('btn-curtir');
  const contadorSpan = document.getElementById('contador');
  let curtidas = 0;

  // Adiciona interatividade básica ao botão
  btnCurtir.addEventListener('click', () => {
    curtidas++;
    contadorSpan.textContent = curtidas;
  });

  // Verificação no console para garantir o carregamento da imagem
  const imgPost = document.getElementById('imagem-post');
  imgPost.addEventListener('load', () => {
    console.log('Imagem carregada com sucesso!');
  });
});
