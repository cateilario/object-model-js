let condition = false;

do {
const name = prompt(`Introduce tu nombre`)
    if (!isNaN(name) || name === ""){
    alert (`Nombre no válido`)
    condition === false
    }
const lastName = prompt(`Introduce tus apellidos`)
const birthDay = prompt(`Introduce su día de nacimiento`)
const birthMonth = prompt(`Introduce su mes de nacimiento`)
const birthYear = prompt(`Introduce su año de nacimiento`)

} while (condition === false)

let fullName = name.concat(lastName)
let fullNameUpperCase = fullName.toUpperCase()
let lengthName = fullName.length;
let searchedChar = "A"
let firstA = fullName.indexOfFirst(searchedChar).toLoweCase()
let lastA = fullName.lastIndexOf(searchedChar).toLoweCase()
let nameWithoutLetters = fullName.slice(2)

let birthDayDate = new Date(birthYear, birthMonth - 1, birthDay);
let currentDate = new Date();
let age = currentDate.getFullYear() - birthDayDate.getFullYear();

let cosin180 = Math.cos(180);
let numbers = [34, 67, 23, 75, 35, 19]
let greatestNumber = Math.max(...numbers)
let randomNumber = Math.floor(Math.random() * 101);


document.body.innerHTML = `
<h1>PRÁCTICA 3 - DWEC</h1>
<p>Buenos días <strong>${name}</strong></p>
<p>Tu nombre tiene <strong>${lengthName}</strong> caracteres, incluidos espacios.</p>
<p>La primera letra <strong>${searchedChar}</strong> está en la posición <strong>${firstA}</strong></p>
<p>La primera letra <strong>${searchedChar}</strong> está en la posición <strong>${lastA}</strong></p>
<p>Tu nombre menos las 3 primeras letras es: ${nameWithoutLetters}</p>
<p>Tu nombre todo en mayúsculas es: ${nameWithoutLetters}</p>
<p>Tu edad es: ${age}</p>
<p>Naciste un feliz día de ${season} del año ${birthYear}</p>
<p>El coseno de 180 es: ${cosin180}</p>
<p>El número mayor de (${numbers}) es ${greatestNumber}</p>
<p>Ejemplo de número al azar entre 0 y 100: ${randomNumber}</p>
`

let getSeason = (birthDay, birthMonth) => {
    if((birthDay >= 21 && birthMonth === 12) || birthMonth === 1 || birthMonth === 2 || (birthDay < 21 && birthMonth === 3))
    return "Invierno"
    if((birthDay >= 21 && birthMonth === 3) || birthMonth === 4 || birthMonth === 5 || (birthDay < 21 && birthMonth === 6))
    return "Primavera"
    if((birthDay >= 21 && birthMonth === 6) || birthMonth === 7 || birthMonth === 8 || (birthDay < 21 && birthMonth === 9))
    return "Verano"
    ((birthDay >= 21 && birthMonth === 9) || birthMonth === 10 || birthMonth === 11 || (birthDay < 21 && birthMonth === 12))
    return "Otoño"
}

let season = getSeason(birthDay, birthMonth)


