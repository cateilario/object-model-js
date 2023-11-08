let name, lastName, birthDay, birthMonth, birthYear;

do {
    name = prompt(`Introduzca su nombre`);
    if (!name || !isNaN(name)) {
        condition = false;
        alert(`Nombre no válido`);
    }
} while (!name || !isNaN(name));

do {
    lastName = prompt(`Introduzca sus apellidos`);
    if (!lastName || !isNaN(lastName)) {
        alert(`Apellidos no válidos`);
    }
} while (!lastName || !isNaN(lastName));

do {
    birthDay = parseInt(prompt(`Introduzca su día de nacimiento`));
    if (isNaN(birthDay) || birthDay === "" || birthDay < 1 || birthDay > 31) {
        alert(`Día de nacimiento no válido`);
    }
} while (isNaN(birthDay) || birthDay === "" || birthDay < 1 || birthDay > 31);

do {
    birthMonth = parseInt(prompt(`Introduzca su mes de nacimiento`));
    if (isNaN(birthMonth) || birthMonth === "" || birthMonth < 1 || birthMonth >12) {
        alert(`Mes de nacimiento no válido`);
    }
} while (isNaN(birthMonth) || birthMonth === "" || birthMonth < 1 || birthMonth > 12);

do {
    birthYear = prompt(`Introduzca su año de nacimiento`);
    if (isNaN(birthYear) || birthYear === "" || birthYear > 2023) {
        alert(`Año de nacimiento no válido`);
    }
} while (isNaN(birthYear) || birthYear === "" || birthYear > 2023);


/*const name = prompt(`Introduzca su nombre`)
const lastName = prompt(`Introduzca sus apellidos`)
const birthDay = parseInt(prompt(`Introduzca su dia nacimiento`))
const birthMonth = parseInt(prompt(`Introduzca su mes nacimiento`))
const birthYear = parseInt(prompt(`Introduzca su año nacimiento`))
*/

let fullName = name.concat(" ", lastName)
let fullNameUpperCase = fullName.toUpperCase()
let lengthName = fullName.length;
let searchedChar = "A".toLowerCase()
let firstA = fullName.indexOf(searchedChar)
let lastA = fullName.lastIndexOf(searchedChar)
let nameWithoutLetters = fullName.slice(3)

let birthDayDate = new Date(birthYear, birthMonth - 1, birthDay);
let currentDate = new Date();
let age = currentDate.getFullYear() - birthDayDate.getFullYear();

let cosin180 = Math.cos(180);
let numbers = [34, 67, 23, 75, 35, 19]
let greatestNumber = Math.max(...numbers)
let randomNumber = Math.floor(Math.random() * 101);


const getSeason = (birthDay, birthMonth) => {

    if((birthDay >= 21 && birthMonth === 12) || birthMonth === 1 || birthMonth === 2 || (birthDay < 21 && birthMonth === 3)){
    return "invierno"
    }
    else if((birthDay >= 21 && birthMonth === 3) || birthMonth === 4 || birthMonth === 5 || (birthDay < 21 && birthMonth === 6)){
    return "primavera"
    }
    else if((birthDay >= 21 && birthMonth === 6) || birthMonth === 7 || birthMonth === 8 || (birthDay < 21 && birthMonth === 9)){
    return "verano"
    }
    else if((birthDay >= 21 && birthMonth === 9) || birthMonth === 10 || birthMonth === 11 || (birthDay < 21 && birthMonth === 12)){
    return "otoño"
    }
}

let season = getSeason(birthDay, birthMonth)

document.body.innerHTML = `
<h1>PRÁCTICA 3 - DWEC</h1>
<hr>
<p>Buenos días <strong>${name}</strong></p>
<p>Tu nombre tiene <strong>${lengthName}</strong> caracteres, incluidos espacios.</p>
<p>La primera letra <strong>${searchedChar}</strong> está en la posición <strong>${firstA}</strong></p>
<p>La última letra <strong>${searchedChar}</strong> está en la posición <strong>${lastA}</strong></p>
<p>Tu nombre menos las 3 primeras letras es: <strong>${nameWithoutLetters}</strong></p>
<p>Tu nombre todo en mayúsculas es: <strong>${fullNameUpperCase}</strong></p>
<p>Tu edad es: <strong>${age}</strong></p>
<p>Naciste un feliz día de <strong>${season}</strong> del año <strong>${birthYear}</strong></p>
<p>El coseno de 180 es: <strong>${cosin180}</strong></p>
<p>El número mayor de <strong>(${numbers})</strong> es <strong>${greatestNumber}</strong></p>
<p>Ejemplo de número al azar entre 0 y 100: <strong>${randomNumber}</strong></p>
<hr>
`

const openWindowBtn = document.createElement("button")
newBtn.innerText = `Abrir ventana`;
document.body.appendChild(openWindowBtn)

newBtn.addEventListener("click", () =>{
    location.replace("/newWindow.html")
})

const resetBtn = document.createElement("button")
newBtn.innerText = `Reiniciar`;
document.body.appendChild(resetBtn)





