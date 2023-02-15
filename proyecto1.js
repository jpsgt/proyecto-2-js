
class Beca{
    constructor( nombre , apellido , edad , promedio , estado ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.promedio = promedio;
        this.estado = estado;
    }

    get_datos(){
        console.log("<--------->");
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Promedio: ", this.promedio);
        console.log("Estado de la beca: ", this.estado);
    }
}

let lista_becarios = [];

for( let i = 0 ; i < 1 ; i = i + 1 ){

    let nombre = prompt("Ingrese el nombre del becario");
    let apellido = prompt("Ingrese el apellido del becario");
    let edad = prompt("Ingrese la edad del becario");
    let promedio = prompt("Ingrese el promedio del becario");

    edad = parseInt(edad);
    promedio = parseInt(promedio);

    if( edad >= 18 && promedio >= 8 ){

        estado = "esta siendo aprobada"
    
    }
    else if( edad >= 18 && promedio <= 7){

        estado = "esta siendo procesada"

    }
    else{

        alert("usted no puede tener su beca")

    }
    let beca = new Beca(nombre , apellido , edad , promedio , estado);

    lista_becarios.push(beca);
}

console.log( lista_becarios );

for( let beca of lista_becarios ){

    beca.get_datos();

}