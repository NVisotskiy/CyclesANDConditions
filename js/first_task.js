

let age = prompt("Скільки вам років?");

if (isNaN(age) || age === "" || age === null) {
  console.log("Ви ввели некоректні дані");
} else {
  age = parseInt(age);
  if (age < 0) {
    console.log("Ви ввели від'ємний вік!");
  } else if (age <= 11) {
    console.log("Ви є дитиною");
  } else if (age <= 17) {
    console.log("Ви є підліттком");
  } else if (age <= 59) {
    console.log("Ви є дорослим");
  } else {
    console.log("Ви є пенсіонером");
  }
}
