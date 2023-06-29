const card = document.querySelector('.card');
card.addEventListener('click', function() {
  const hiddenText = this.querySelector('.hidden-text');
  hiddenText.style.display = 'block'; // Ao clicar, exiba o texto oculto
});