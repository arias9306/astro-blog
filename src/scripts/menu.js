document.querySelector('.hamburger')?.addEventListener('click', () => {
  console.log('hola');
  document.querySelector('.nav-links')?.classList.toggle('expanded');
});
