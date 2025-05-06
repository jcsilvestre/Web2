// skills.js

function startSkillAnimations() {
  const skillBars = document.querySelectorAll('.skill-bar');
  
  skillBars.forEach(bar => {
    const level = bar.querySelector('.skill-level');
    const percent = level.getAttribute('data-percent'); // Pega o valor da habilidade
    
    // Animação
    level.style.width = `${percent}%`; // Definindo a largura da barra

    // Exibindo a porcentagem de forma gradual
    let current = 0;
    const interval = setInterval(() => {
      if (current < percent) {
        current++;
        level.querySelector('.percent-label').innerText = `${current}%`;
      } else {
        clearInterval(interval);
      }
    }, 10);
  });
}
