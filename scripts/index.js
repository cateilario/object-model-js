/**
 * author: Caterina Ilario
 * GitHub: https://github.com/cateilario/object-model-js.git
 */

import { openWindow } from "./newWindow.js"; 

let name, lastName, birthDay, birthMonth, birthYear;

// Bucle do-while para que nos pida introducir las variables hasta hacerlo bien.
do {
    name = prompt(`Introduzca su nombre`);
    if (!name || !isNaN(name)) {
        alert(`ERROR: Nombre no válido`);
    }
} while (!name || !isNaN(name));

do {
    lastName = prompt(`Introduzca sus apellidos`);
    if (!lastName || !isNaN(lastName)) {
        alert(`ERROR: Apellidos no válidos`);
    }
} while (!lastName || !isNaN(lastName));

do {
    birthDay = parseInt(prompt(`Introduzca su día de nacimiento`));
    if (isNaN(birthDay) || birthDay === "" || birthDay < 1 || birthDay > 31) {
        alert(`ERROR: Día no válido`);
    }
} while (isNaN(birthDay) || birthDay === "" || birthDay < 1 || birthDay > 31);

do {
    birthMonth = parseInt(prompt(`Introduzca su mes de nacimiento`));
    if (isNaN(birthMonth) || birthMonth === "" || birthMonth < 1 || birthMonth > 12 || birthDay > 29 && birthMonth === 2 || birthDay === 31 && (birthMonth === 4 || birthMonth === 6 || birthMonth === 9 || birthMonth === 11)) {
        alert(`ERROR: Mes no válido`);
    }
} while (isNaN(birthMonth) || birthMonth === "" || birthMonth < 1 || birthMonth > 12 || birthDay > 29 && birthMonth === 2 || birthDay === 31 && (birthMonth === 4 || birthMonth === 6 || birthMonth === 9 || birthMonth === 11));

do {
    birthYear = parseInt(prompt(`Introduzca su año de nacimiento`));
    if (isNaN(birthYear) || birthYear === "" || birthYear > 2023 || birthYear <= 0) {
        alert(`ERROR: Año no válido`);
    }
} while (isNaN(birthYear) || birthYear === "" || birthYear > 2023 || birthYear <= 0)

let fullName = name.concat(" ", lastName)
let fullNameUpperCase = fullName.toUpperCase()
let lengthName = fullName.length;
let searchedChar = "A"
let searchedCharLowerCase = searchedChar.toLowerCase()
let firstA = fullName.toLowerCase().indexOf(searchedCharLowerCase) + 1
let lastA = fullName.toLowerCase().lastIndexOf(searchedCharLowerCase) + 1
let nameWithoutLetters = fullName.slice(3)
let number = 180;
let cos = Math.cos(number * Math.PI / number);
let numbers = [34, 67, 23, 75, 35, 19]
let greatestNumber = Math.max(...numbers)
let randomNumber = Math.floor(Math.random() * 101);

// Función para calcular la edad
const getAge = (birthDay, birthMonth, birthYear) => {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let age = currentDate.getFullYear() - birthYear;

    if((currentMonth === birthMonth && currentDay < birthDay) || currentMonth < birthMonth){
        age--;
    }

    return age;
}

// Función para obtener la estación del año y asignamos la función a la variable season
const getSeason = (birthDay, birthMonth) => {
    switch (true) {
        case (birthDay >= 21 && birthMonth === 12) || birthMonth === 1 || birthMonth === 2 || (birthDay < 21 && birthMonth === 3):
            return "invierno";
            break;
        case (birthDay >= 21 && birthMonth === 3) || birthMonth === 4 || birthMonth === 5 || (birthDay < 21 && birthMonth === 6):
            return "primavera";
            break;
        case (birthDay >= 21 && birthMonth === 6) || birthMonth === 7 || birthMonth === 8 || (birthDay < 21 && birthMonth === 9):
            return "verano";
            break;
        case (birthDay >= 21 && birthMonth === 9) || birthMonth === 10 || birthMonth === 11 || (birthDay < 21 && birthMonth === 12):
            return "otoño";
            break;
    }
}

let season = getSeason(birthDay, birthMonth)

// Sacar por pantalla body del HTML con los resultados
document.body.innerHTML = `
<h1>PRÁCTICA 3 - DWEC</h1>
<hr>
<p>Buenos días, <strong>${name}</strong></p>
<p>Tu nombre completo (nombre y apellidos) tiene <strong>${lengthName}</strong> caracteres, incluidos espacios.</p>
<p>La <strong>primera letra '${searchedChar}'</strong> está en la posición <strong>${firstA}</strong></p>
<p>La <strong>última letra 'A'</strong> está en la posición <strong>${lastA}</strong></p>
<p>Tu nombre <strong>menos las 3 primeras letras</strong> es: <strong>${nameWithoutLetters}</strong></p>
<p>Tu nombre todo en <strong>MAYÚSCULAS</strong> es: <strong>${fullNameUpperCase}</strong></p>
<p>Tu edad es: <strong>${getAge(birthDay, birthMonth, birthYear)}</strong> años.</p>
<p>Naciste un feliz día de <strong>${season}</strong> del año <strong>${birthYear}</strong></p>
<p>El <strong>coseno de ${number}</strong> es: <strong>${cos}</strong></p>
<p>El número mayor de <strong>(${numbers})</strong> es <strong>${greatestNumber}</strong></p>
<p>Ejemplo de número al azar entre 0 y 100: <strong>${randomNumber}</strong></p>
<hr>
`
// Cambiar la fuente del HTML 
document.body.style.fontFamily = "Arial";

// Crear botones y enlazarles una función
const openWindowBtn = document.createElement("button")
openWindowBtn.innerText = `Abrir ventana`;
openWindowBtn.style.padding = "5px"
document.body.appendChild(openWindowBtn)

openWindowBtn.addEventListener("click", openWindow)

const resetBtn = document.createElement("button")
resetBtn.innerText = `Reiniciar`;
resetBtn.style.padding = "5px"
document.body.appendChild(resetBtn)

resetBtn.addEventListener("click", () => {
    location.reload();
})





