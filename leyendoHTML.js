const h1 =document.querySelector('h1');
const button =document.querySelector(".boton");
const in1 =document.querySelector('.in1');
const in2 =document.querySelector('.in2');
const result=document.querySelector('.result');

button.addEventListener('click',experimento);

function experimento(){
const sumaInputs = in1.value+in2.value;
result.innerText="Resultado:  "+sumaInputs;
}

