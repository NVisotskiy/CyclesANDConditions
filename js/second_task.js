

let number = prompt("Введіть число від 0 до 9:");

if (isNaN(number) || number === "" || number === null) {
  console.log("Ви ввели некоректне число");
} else {
  number = parseInt(number);
  switch (number) {
    case 0:
      console.log(")");
      break;
    case 1:
      console.log("!");
      break;
    case 2:
      console.log("@");
      break;
    case 3:
      console.log("#");
      break;
    case 4:
      console.log("$");
      break;
    case 5:
      console.log("%");
      break;
    case 6:
      console.log("^");
      break;
    case 7:
      console.log("&");
      break;
    case 8:
      console.log("*");
      break;
    case 9:
      console.log("(");
      break;
    default:
      console.log("Ви ввели число поза діапазоном від 0 до 9");
      break;
  }
}
