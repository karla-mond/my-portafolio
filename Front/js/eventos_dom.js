// 1. Posición del mouse 
function posMouse (event) {
    const mouseP = document.getElementById('mousePosition')
    mouseP.textContent = `Posición del mouse: ${event.screenX} - ${event.screenY}`
}

// 2. Obtener el nombre y apellido y mostrar nombre completo
function inputNames (event) {
    event.preventDefault()
    const Fname = document.getElementById('fname')
    const Lname = document.getElementById('lname')
    const Cname = document.getElementById('nombreC')
    Cname.textContent =  `Nombre completo: ${Fname.value} ${Lname.value} `
}

// 3. Agregar fila o columna al dar click a un botón
function addRow (event) {
    console.log('Button Row Clicked')
    let tabla = document.getElementById('sampleTable')
    let rowCount = tabla.rows.length
    let colCount = tabla.rows[0].cells.length
    let newRow = tabla.insertRow(rowCount)
    for(let i=0; i<colCount; i++) {
        let newCell1 = newRow.insertCell(i)
        newCell1.innerHTML = "Cell from New Row"
    }
}

function addColumn (event) {
    console.log('Button Column Clicked')
    let tabla = document.getElementById('sampleTable')
    for(let i=0; i<tabla.rows.length; i++) {
        let newCol = tabla.rows[i].insertCell(tabla.rows[i].cells.length)
        newCol.innerHTML = "Cell from New Col"
    }
}

// 4. 2 cajas input para fila y columna y una para solicitar texto, cambiar contenido de la tabla
function editContent (event) {
    let tabla = document.getElementById("myTable")
    let rowCount = tabla.rows.length
    let colCount = tabla.rows[0].cells.length
    const editRow = document.getElementById("rowC")
    const editCol = document.getElementById("colC")
    const editText = document.getElementById("textC")
    if(editRow.value <= rowCount && editCol.value <= colCount) {
        let newC = editText.value
        tabla.rows[editRow.value - 1].cells[editCol.value - 1].innerHTML = newC
    }
}

// 5. código para quitar o agregar elementos a la lista de opciones con colores aleatorios
function addElements (event) {
    let randomC = Math.floor(Math.random()*16777215).toString(16)
    const diVacio = document.getElementById("vacio")
    const selector = document.getElementById("colorSelect")
    const newOption = document.createElement('option')
    const OpText = document.createTextNode(randomC)
    newOption.appendChild(OpText)
    newOption.setAttribute('value', 'Option Value')
    selector.appendChild(newOption)
    diVacio.style.backgroundColor = "#" + randomC
    console.log(randomC)
}

function removeElements (event) {
    const selector = document.getElementById("colorSelect")
    selector.removeChild(selector.options[0]);
    console.log("Color eliminado")
}

// 6. Cambiar imágenes cuando el mouse hoverea
function changePic (event) {
    const mouseP = document.getElementById('imgs')
    let randomN1 = Math.round(299 + (Math.random() * ((601 - 299) + 1)))
    let randomN2 = Math.round(299 + (Math.random() * ((601 - 299) + 1)))
    mouseP.style.height = randomN1 + "px"
    mouseP.style.width = randomN2 + "px"
    mouseP.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1lAlyeGL_D5RD3GRwB8rMP3HTdny4ntM0w&usqp=CAU"
    console.log(randomN1, randomN2)
}

function changePicBack (event) {
    const mouseP = document.getElementById('imgs')
    mouseP.src = "http://placekitten.com/200/300"
    mouseP.style.height = "300px"
    mouseP.style.width = "200px"
}
// Ejercicio 1
document.addEventListener("mousemove", posMouse)
// Ejercicio 2
document.addEventListener("submit", inputNames)
// Ejercicio 3
document.addEventListener("bR", addRow)
document.addEventListener("bC", addColumn)
// Ejercicio 4
changeB.addEventListener("click", editContent)
// Ejercicio 5
addB.addEventListener("click", addElements)
removeB.addEventListener("click", removeElements)
// Ejercicio 6
imgs.addEventListener("mouseover", changePic)
imgs.addEventListener("mouseout", changePicBack)