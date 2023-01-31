//Un problema
let result=0;
while(result!=4){
result=prompt("2+2=?");
console.log("Resultado incorrecto");
}
console.log("Resultado correcto, FELICIDADES");
/////////////////////////////////////////////////////////////
//Otro problema
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion==="free"||suscripcion==="basic"||suscripcion==="expert"||suscripcion===expertduo) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}