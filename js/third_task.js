

// Запитати від користувача верхню та нижню межі діапазону
const lower = parseInt(prompt('Введіть нижню межу діапазону:'));
const upper = parseInt(prompt('Введіть верхню межу діапазону:'));

// Ініціалізувати змінну для зберігання суми
let sum = 0;

// Перебрати всі числа у діапазоні та додати їх до суми
for (let i = lower; i <= upper; i++) {
  sum += i;
}


console.log(`Сума чисел у діапазоні від ${lower} до ${upper} дорівнює ${sum}`);
