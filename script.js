// Example: Change glow color inside Portfolio section
const portfolio = document.querySelector('.portfolio');
document.addEventListener('mousemove', (e) => {
  if (portfolio.contains(e.target)) {
    glow.style.background = 'radial-gradient(circle, rgba(87, 133, 255, 0.4) 0%, transparent 60%)';
  } else {
    glow.style.background = 'radial-gradient(circle, rgba(183, 75, 75, 0.4) 0%, transparent 60%)';
  }
});
