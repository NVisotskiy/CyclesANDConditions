

// Запитати від користувача число
const num = parseInt(prompt('Введіть число:'));

// Ініціалізувати порожній масив для зберігання дільників
const divisors = [];

// Перебрати всі можливі дільники та додати їх до масиву
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisors.push(i);
  }
}

console.log
