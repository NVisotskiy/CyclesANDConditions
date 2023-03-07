
// Запитати від користувача два числа
const num1 = parseInt(prompt('Введіть перше число:'));
const num2 = parseInt(prompt('Введіть друге число:'));

// Знайти менше з двох чисел
const smallerNum = num1 < num2 ? num1 : num2;

// Ініціалізувати змінну для зберігання найбільшого спільного дільника
let greatestDivisor = 1;

// Перебрати всі можливі дільники меншого з двох чисел та знайти найбільший спільний дільник
for (let i = 2; i <= smallerNum; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    greatestDivisor = i;
  }
}

// Вивести результат
console.log(`Найбільший спільний дільник ${num1} та ${num2} дорівнює ${greatestDivisor}`);
