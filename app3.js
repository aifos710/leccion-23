window.addEventListener("load", function() {
   var button = document.getElementById("calcular");
   button.addEventListener("click", function() {
   	var nombre = document.getElementById("nombre").value;
   	var edad = parseInt(document.getElementById("edad").value);
   	var sexo = document.getElementById("sexo").value;
  	
  	var humano = new persona(nombre, edad, sexo);
   
   	var resultado = document.getElementById("resultado");
   	resultado.innerHTML = humano.presentacion();

	});
});

   function persona (nombre, edad, sexo){
   	this.nombre = nombre;
   	this.edad = edad;
   	this.sexo = sexo;
   	this.mayorDeEdad = (this.edad >=18);
   	this.presentacion = function() {
   		document.write("Hola, mi nombre es" + (this.nombre) + ", tengo " + (this.edad) + "años y soy " + ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad");
   	}
   
}


