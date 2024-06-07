let cantidad;
let precioUnitario;
let subTotal;
let prodName;
let total = 0;

function calcular() {
    // Obtener los valores de los campos de entrada
    
    cantidad = parseFloat(document.getElementById("CnPivot").value);
    precioUnitario = parseFloat(document.getElementById("PrPivot").value);

    // Calcular el total
    subTotal = cantidad * precioUnitario;

    // Mostrar el resultado en la consola
    console.log(subTotal);

    // Asignar el resultado al campo de salida
    document.getElementById("TotalItem").value = subTotal;
    //document.getElementById("amnt").value = amount
}

function agregarItem() {
    prodName = document.getElementById("producto").value;
    console.log(prodName);
    document.getElementById("newtr").innerHTML += "<tr><td>" + 
                        + prodName + "</td><td>" 
                        + cantidad + "</td><td>" + precioUnitario + "</td><td>" + subTotal + "</td></tr>";
    
    
    total = total + subTotal;
    document.getElementById("total").value = total;
    console.log(total);
}
