var items = localStorage.getItem('ListObject')
// 
/* Operador ternario:
    La instrucción JSON.parse(items) en JavaScript analiza una cadena JSON y la convierte en un objeto JavaScript. 
    JSON, que significa "JavaScript Object Notation", es un formato ligero de intercambio de datos que se utiliza 
    comúnmente para enviar datos entre un servidor y un cliente web.

    La función JSON.parse() toma una cadena JSON como argumento y devuelve un objeto JavaScript que representa la 
    estructura de datos descrita en esa cadena JSON. Esto permite que los datos JSON se utilicen fácilmente en un 
    programa JavaScript.
*/
items = items ? JSON.parse(items) : []
showItems()

function addItem() {
    // Obtiene de las etiquetas <input> los datos escritos por el usuario
    let NombreProducto = document.getElementById('NombreProducto').value 
    let Costo = document.getElementById('Costo').value 
    let descripcion = document.getElementById('descripcion').value



/*  Valida que los datos tengan información, si es cierto:
    La función push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array 
    después de la inserción de los elementos. Esta es una forma común de agregar elementos dinámicamente a un array.
    En este caso el array es un array de objetos.
*/
    if(NombreProducto && Costo && descripcion){
        items.push(
                    {
                        'nombreProducto': NombreProducto, 
                        'Costo': Costo,
                        'descripcion' : descripcion
                    }
                )
        showItems()
    }
}

// Muestra los items almacenados en la sección de artículos almacenados.
function showItems() {
    document.getElementById('NombreProducto').value = ''
    document.getElementById('descripcion').value = ''
    document.getElementById('Costo').value = ''
    //Coloca el cursor en el campo 'NombreProducto' (pone el enfoque en el control)
    document.getElementById('NombreProducto').focus()

    // Agrega cada registro a la variable "html".
    let html = ''
    items.forEach( (data, indice) => {

        //mt-2 mb-2 ms-2 me-2 <div class="col-5 mt-2 mb-2 text-center">
        html += '<div class="row border border-warning ">'
            html += `<div class="col-3 mt-2 mb-2 text-center"><h4>${data.nombreProducto}</h4></div>`
            html += `<div class="col-3 mt-2 mb-2 text-center"><h4>${data.Costo}</h4></div>`
            html += `<div class="col-3 mt-2 mb-2 text-center"><h4>${data.descripcion}</h4></div>`
            html += `<div class="col-1 mt-2 mb-2"> 
                        <a href="#" class="btn btn-danger" onclick=deleteItem(${indice})>X</a>  
                    </div>`
        html += '</div>'
    });
    
    // Código de comprobación en la consola del navegador.
    /*items.forEach(element => {
        console.log(element.nombreProducto)
    });

    for (const element of items) {
        console.log(element.nombreProducto)
    }*/

    // Carga los registros en la etiqueta <div items-list>
    document.getElementById('items-list').innerHTML = html
    // 
/*  .stringify convierte en cadena un objeto JSON
    .stringify es un método en JavaScript que se utiliza para convertir
     un objeto JavaScript en una cadena de texto JSON.
*/

/*  La función localStorage.setItem('ListObject', JSON.stringify(items)) se utiliza para almacenar datos 
    en el objeto localStorage del navegador web. Esta función convierte el objeto items en una cadena JSON 
    utilizando JSON.stringify(), y luego almacena esa cadena JSON en el localStorage bajo la clave 'ListObject'.

    Aquí hay un desglose de lo que hace cada parte de esta instrucción:
    JSON.stringify(items): Convierte el objeto items en una cadena JSON. Esto es necesario porque localStorage 
    solo puede almacenar datos como cadenas de texto, por lo que necesitamos convertir el objeto en una 
    cadena JSON para poder almacenarlo.
    localStorage.setItem('ListObject', ... ): Esta es la función que establece el valor en el localStorage. 
    Toma dos argumentos: el primer argumento es la clave bajo la cual se almacenará el valor, en este caso, 
    'ListObject', y el segundo argumento es el valor que se almacenará. En este caso, el valor es la cadena 
    JSON generada a partir del objeto items.
    Por lo tanto, cuando se ejecuta localStorage.setItem('ListObject', JSON.stringify(items)), el objeto items
    se convierte en una cadena JSON y se almacena en el localStorage bajo la clave 'ListObject'. Se puede 
    acceder a estos datos más tarde utilizando localStorage.getItem('ListObject') y, si es necesario, se 
    puede convertir la cadena JSON nuevamente en un objeto utilizando JSON.parse().
*/

    localStorage.setItem('ListObject', JSON.stringify(items) )
}

/* Esta función borra un registro por medio de su índice.
    La función splice() en JavaScript se utiliza para modificar un array eliminando o reemplazando elementos 
    existentes y/o agregando nuevos elementos en su lugar. La sintaxis básica de splice() es la siguiente:

    Cuando se utiliza items.splice(indice, 1), se eliminará un elemento del array items en la posición indice.
    Por ejemplo:

    var items = ['a', 'b', 'c', 'd', 'e'];
    items.splice(2, 1);
    console.log(items); // Output: ['a', 'b', 'd', 'e']
    En este ejemplo, items.splice(2, 1) eliminará el elemento en la posición 2 del array items, que es 'c'. 
    Después de la ejecución de splice(), el array items se modificará y contendrá los elementos 
    restantes: ['a', 'b', 'd', 'e'].
*/
function deleteItem(indice) {
    items.splice(indice, 1)
    showItems()
}

