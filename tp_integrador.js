const nombreTienda = "Aditas";
const producto1 = "La sombra del viento";
const producto2 = "Una isla bajo el mar";
let precioProd1 = 1350;
let precioProd2 = 1400;
let cantidad1 = 0;
let cantidad2 = 0;
let cantCuotas = 0;
let subtotal1 = 0;
let subtotal2 = 0;
let total = 0;
let valorCuota = 0;
const codigoDescuento = "ADALOVELACE";
let codigoDescuentoIngresado = "";
let descuento = 0.10;
let totalDescuento = 0;
let valorCuotaDescuento = 0;
let respuestaDescuento = "";



const nombre = prompt(`¡Hola, bienvenida a nuestra librería virtual 📚, ${nombreTienda}!

Por favor, escribí tu nombre:`);

alert(`${nombre}, tenemos en promoción los siguientes productos:

📖 ${producto1}
📖 ${producto2}`);

let respuesta1 = prompt(`¿Querés comprar el libro ${producto1}, cuyo precio es $ ${precioProd1}? (SÍ/NO)`);

// recuerden dejar un espacio antes y después de un operador
// respuesta1 === "SÍ"
respuesta1 ==="SÍ" && (cantidad1 = prompt(`¿Cuántas unidades querés comprar?`));
let respuesta2 = prompt(`¿Querés comprar el libro ${producto2}, cuyo precio es $ ${precioProd2}? (SÍ/NO)`);
respuesta2 ==="SÍ" && (cantidad2 = prompt(`¿Cuántas unidades querés comprar?`));

subtotal1 = precioProd1 * cantidad1;
subtotal2 = precioProd2 * cantidad2;
total = subtotal1 + subtotal2;





alert(`Detalle de tu compra: 

${producto1}, AR$ ${precioProd1} x ${cantidad1} = AR$ ${subtotal1}

${producto2}, AR$ ${precioProd2} x ${cantidad2} = AR$ ${subtotal2}

Total de tu compra: AR$ ${total}`);

let respuestaTarjeta = prompt(`${nombre}, ¿querés pagar con tarjeta de crédito?`);
respuestaTarjeta ==="SÍ" && (cantCuotas = prompt(`¿En cuántas cuotas?`));

valorCuota = total / cantCuotas;

cantCuotas !==0 && alert(`Detalle de tu compra: 

${producto1}, AR$ ${precioProd1} x ${cantidad1} = AR$ ${subtotal1}

${producto2}, AR$ ${precioProd2} x ${cantidad2} = AR$ ${subtotal2}

Total de tu compra: AR$ ${total}

Cantidad de cuotas ${cantCuotas}; valor de cada cuota ${valorCuota}`);

respuestaDescuento = prompt(`${nombre}, ¿tenés un código de descuento?`);
respuestaDescuento ==="SÍ" && (codigoDescuentoIngresado = prompt("Ingresá el código:"));

// Si bien son muy útiles a la hora de corregir nuestro código, 
// No se deben dejar console.log en el código a entregar. 
// (Corremos el riesgo de que lo vea un cliente o usuario). 
console.log(codigoDescuentoIngresado);
(respuestaDescuento ==="SÍ" && (codigoDescuentoIngresado !== codigoDescuento)) && (codigoDescuentoIngresado = prompt("Código incorrecto. Verificá y volvé a ingresarlo:"));

// Si digo que no tengo un código de código de descuento, igual se me aplica
// Ya que al final no hay un escenario que contemple un mensaje al usuario en caso de que respuestaDescuento sea distinta a "SÍ". 
totalDescuento = total - (total * descuento);

valorCuotaDescuento = totalDescuento / cantCuotas;




cantCuotas !==0 && alert(`Detalle de tu compra: 

${producto1}, AR$ ${precioProd1} x ${cantidad1} = AR$ ${subtotal1}
${producto2}, AR$ ${precioProd2} x ${cantidad2} = AR$ ${subtotal2}

Total de tu compra: AR$ ${total}
Tu descuento es ${descuento * 100}%
Total con descuento: AR$ ${totalDescuento}

Cantidad de cuotas ${cantCuotas}; valor de cada cuota AR$ ${valorCuotaDescuento}`);



cantCuotas ===0 && alert(`Detalle de tu compra: 

${producto1}, AR$ ${precioProd1} x ${cantidad1} = AR$ ${subtotal1}
${producto2}, AR$ ${precioProd2} x ${cantidad2} = AR$ ${subtotal2}

Total de tu compra: AR$ ${total}
Tu descuento es ${descuento * 100}%
Total con descuento: AR$ ${totalDescuento}`);


alert(`${nombre}, muchas gracias por tu compra.

Que disfrutes tu lectura. ♥`);

//Muy buen trabajo 

