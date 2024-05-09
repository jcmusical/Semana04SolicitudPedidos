var items = localStorage.getItem('ListObject')
items = items ? JSON.parse(items) : []
showItems()

function addItem() {
    let NombreProducto = document.getElementById('NombreProducto').value 
    let Costo = document.getElementById('Costo').value 
    let descripcion = document.getElementById('descripcion').value
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

function showItems() {
    document.getElementById('NombreProducto').value = ''
    document.getElementById('descripcion').value = ''
    document.getElementById('Costo').value = ''
    //Coloca el cursor en el campo 'NombreProducto' (pone el enfoque)
    document.getElementById('NombreProducto').focus()

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
    
    /*items.forEach(element => {
        console.log(element.nombreProducto)
    });

    for (const element of items) {
        console.log(element.nombreProducto)
    }*/

    document.getElementById('items-list').innerHTML = html
    // 
/*  .stringify convierte en cadena un objeto JSON
    .stringify es un método en JavaScript que se utiliza para convertir
     un objeto JavaScript en una cadena de texto JSON.
*/
    document.getElementById('items-list').innerHTML = html
    localStorage.setItem('ListObject', JSON.stringify(items) )
}

function deleteItem(indice) {
    items.splice(indice, 1)
    showItems()
}

