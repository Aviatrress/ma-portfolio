// script.js

// ===== Toggle Mobile Menu =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  spookySfx();
});

// ===== Creepy Sparkle Trail on Mouse Move =====
document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 500);
});

// ===== Button Color Shuffle on Hover =====
const buttons = document.querySelectorAll('.btn, .btn-sm');
const colors = ['#ffb6c1', '#add8e6', '#7fffd4', '#ffe4b5', '#dda0dd', '#98fb98'];

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    btn.style.background = color;
    btn.style.color = '#111';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.background = '';
    btn.style.color = '';
  });
});

// ===== Spooky SFX (Optional) =====
function spookySfx() {
  const audio = new Audio('https://freesound.org/data/previews/458/458093_6142140-lq.mp3');
  audio.volume = 0.2;
  audio.play();
}

// ===== Fun Scroll Reveal =====
const reveals = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  reveals.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      sec.classList.add('reveal');
    }
  });
});