export const openWindow = () => {
    const newWindow = window.open("/newWindow.html", "nuevaVentana", "height=800,width=1000,resizable=no");

newWindow.onload = () =>{
    const windowURL = newWindow.location.href
    const windowProtocol = newWindow.location.protocol

    newWindow.document.write(`
    <h1>EJEMPLO DE VENTANA NUEVA</h1>
    <p><strong>URL Completa: </strong>${windowURL}</p>
    <p><strong>Protocolo utilizado: </strong>${windowProtocol}</p>
    <iframe width="800" height="600" src="https://elpais.com/"></iframe>
    <br>
    <br>
    `)

    const closeBtn = newWindow.document.createElement("button")
    closeBtn.innerText = "Cerrar Ventana"
    newWindow.document.body.appendChild(closeBtn)

    closeBtn.addEventListener("click", () => {
        newWindow.close()
    })

}
}