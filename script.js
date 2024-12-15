// Пример простого функционала: вывод в консоль при добавлении товара в корзину
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Товар добавлен в корзину!');
  });
});
