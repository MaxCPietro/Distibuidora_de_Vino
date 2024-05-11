const nombre = document.getElementById("nombre");
const empresa = document.getElementById("empresa");
const correo = document.getElementById("email");
const telefono = document.getElementById("tel");
const mensaje = document.getElementById("mensaje");
const terminos = document.getElementById("terminos");
//primer rudimiento de validacion, falta trabajo de hacerlo mas funcional. Por el momento solo valida longitud del texto ingresado, estoy trabajando en la validacion de tipo
nombre.addEventListener("blur", () => {
  let nombreValue = nombre.value;
  let length = nombreValue.length;
  if (nombreValue === "") {
    alert("campo vacio");
  } else if (length > 20) {
    alert("demasiado largo");
  } else if (length < 3) {
    alert("demasiado corto");
  }
});

empresa.addEventListener("blur", () => {
  let empresaValue = empresa.value;
  let length = empresaValue.length;
  if (empresaValue === "") {
    alert("campo vacio");
  } else if (length > 20) {
    alert("demasiado largo");
  } else if (length < 3) {
    alert("demasiado corto");
  }
});

correo.addEventListener("blur", () => {
  let correoValue = correo.value;
  let length = correoValue.length;
  if (correoValue === "") {
    alert("campo vacio");
  } else if (length > 20) {
    alert("demasiado largo");
  } else if (length < 3) {
    alert("demasiado corto");
  }
});

telefono.addEventListener("blur", () => {
  let telefonoValue = telefono.value;
  let length = telefonoValue.length;
  if (telefonoValue === "") {
    alert("campo vacio");
  } else if (length > 20) {
    alert("demasiado largo");
  } else if (length < 10) {
    alert("demasiado corto");
  }
});

mensaje.addEventListener("blur", () => {
  let mensajeValue = mensaje.value;
  let length = mensajeValue.length;
  if (mensajeValue === "") {
    alert("campo vacio");
  } else if (length > 2) {
    alert("demasiado largo");
  } else if (length < 1000) {
    alert("demasiado corto");
  }
});
