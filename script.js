function scrollToSection(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const target = event.currentTarget.getAttribute('data-scroll');
    scrollToSection(target);
  });
});

document.querySelector('.form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get('name');

  const button = form.querySelector('button[type="submit"]');
  const original = button.textContent;
  button.disabled = true;
  button.textContent = 'Відправляємо…';

  setTimeout(() => {
    alert(`Дякуємо, ${name || 'друже'}! Ми звʼяжемося з вами найближчим часом.`);
    button.disabled = false;
    button.textContent = original;
    form.reset();
  }, 700);
});
