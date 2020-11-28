

function hizoClick() {
 

   var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    
    if(nombre.length==0) {
        alert('Ingresa Datos en campo Nombre');
      } else if(edad.length==0 ){
            alert('Ingresa Datos en Campo Edad');

      }else{
          alert( 'Nombre: '+nombre+    "\nEdad: "+edad);
    
}
document.getElementById('email').addEventListener('input', function() {
  campo = event.target;
  valido = document.getElementById('emailOK');
      
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (emailRegex.test(campo.value)) {
    valido.innerText = "válido";
  } else {
    valido.innerText = "incorrecto";
  }
});




// Animacion de background
const cuadros = document.querySelector('ul.squares');

for (let i = 0; i < 11; i++){
  const li = document.createElement('li');
  const random = (min, max) => Math.random() * (max - min ) + min;

  const size = Math.floor(random(10, 120));
  const posicion = random(1, 99);
  const retraso = random(5, 0.1)
  const duracion = random(24, 12)

  li.style.width =  ` ${size}px`;
  li.style.height =  ` ${size}px`;
  li.style.bottom =  `-${size}px`;

  li.style.left = `${posicion}%`;

  li.style.animationDelay = `${retraso}s`;
  li.style.animationDuration = `${duracion}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}, )`;

  cuadros.appendChild(li);
}