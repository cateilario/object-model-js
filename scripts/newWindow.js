// Exportar la función openWindow para que sea escuchada por el botón
export const openWindow = () => {
    // Crear Nueva Ventana (el resizable no funciona, creo que es por el navegador Chrome)
    const newWindow = window.open('/newWindow.html', 'nuevaVentana', 'menubar=false, toolbar=false, location=false, directories=false, resizable=false, height=800, width=1000');
    // Dar foco a la nueva ventana y llevarla al frente
    newWindow.focus()

// Realizamos las acciones una vez que la ventana se ha cargado
newWindow.onload = () =>{
    const windowURL = newWindow.location.href
    const windowProtocol = newWindow.location.protocol

    // Otra forma de sacar por pantalla:
    newWindow.document.write(`
    <h1>EJEMPLO DE VENTANA NUEVA</h1>
    <p><strong>URL Completa: </strong>${windowURL}</p>
    <p><strong>Protocolo utilizado: </strong>${windowProtocol}</p>
    <iframe width="800" height="600" src="https://elpais.com/"></iframe>
    <br>
    <br>
    `)

    newWindow.document.body.style.fontFamily = "Arial";

    // Botón de cierre de Nueva Ventana
    const closeBtn = newWindow.document.createElement("button")
    closeBtn.innerText = "Cerrar Ventana"
    closeBtn.style.padding = "5px"
    newWindow.document.body.appendChild(closeBtn)

    closeBtn.addEventListener("click", () => {
        newWindow.close()
    })

}
}