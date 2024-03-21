

function suma(){
// Explicacion algoritmo
    alert ("algoritmo que realiza una suma entre dos valores ingresados por ")
    // declara variables necesarias 

let a,b,s= 0;

// captura los datos 

a=parseInt(prompt("ingrese el primer valor"));
b=parseInt(prompt("ingrese el segundo valor"));
// realiza la operacion
s=a+b;

alert("el resultado d ela suma es: " + s)
}

function opBasicas(){

    alert ("operaciones basicas")

// suma
let a,b,s,r,m,d= 0;

a=parseInt(prompt("ingrese el primer valor"));
b=parseInt(prompt("ingrese el segundo valor"));

s=a+b;
r=a-b;
m=a*b;
d=a/b;

alert("el resultado de la resta es: " + r)
alert("el resultado de la multiplicacion es: " + m)
alert("el resultado de la divicion es: " + d)
}

function nCuadrado(){
    // Explicacion del algoritmo
    alert("algoritmo que calcula el cuadrado de un numero ingresado");
    // Declaracion de variables
    let  N,C = 0;
    // capturamos los datos
    N=parseInt(prompt("ingrese el primer valor"));
    // realizamos la operacion
    C=N*N;

    alert("el resultado al cuadrado es: " + C)

}

function Atriangulo(){

    alert("algoritmo que determina la area de un triangulo ");

    let  A,B,R = 0;

    A=parseInt(prompt("ingrese el primer valor"));
    B=parseInt(prompt("ingrese el segundo valor"));

    R=(A*B)/2

    alert("el resultado del area del triangulo es : " + R)


}


function Nmayor(){

    alert("Algoritmo que determina el mayor de dos numeros ingresados ");

    let  N1,N2 = 0;

    N1=parseInt(prompt("ingrese el primer valor"));
    N2=parseInt(prompt("ingrese el segundo valor"));

    if (N1==N2){
        alert("Los valores ingresados son igules");
    }else if(N1>N2){
        alert(N1 +"es mayor que " + N2);
    }else{
        alert (N2 + "es mayor que"+ N1)
    }


}

function Nmenores(){

    alert("Algoritmo que determina el menor de tres numeros ingresados ");

    let  N1,N2,N3 = 0;

    N1=parseInt(prompt("ingrese el primer valor"));
    N2=parseInt(prompt("ingrese el segundo valor"));
    N3=parseInt(prompt("ingrese el tercer valor"));

    if ((N1<=N2) && (N2<=N3)){
        alert(N1 +" es menor que " + N2 + " y Es menor " + N3);
    }else if ((N2<=N1) && (N1<=N3)){
        alert(N2 +" es menor que " + N1 + " y Es menor " + N3);
    }else if ((N3<=N1) && (N1<=N2)){
        alert(N3 +" es menor que " + N1 + " y Es menor " + N2);
    }else if ((N1<=N3) && (N3<=N2)){
        alert(N1 +" es menor que " + N3 + " y Es menor " + N2);
    }else if ((N2<=N3) && (N3<=N1)){
        alert(N2 +" es menor que " + N3 + " y Es menor " + N1);
    
}

}


function conMedidas(){
    //Explicacion del algoritmo 
    alert("Algoritmo que determina las pulgadas, kilometros y milimetros");
    //Declaracion de variables
    let m=0;
    //Capturamos los datos
    m= parseInt(prompt("Ingrese un valor"));
    //Realizamos las operaciones 
    p=m*39.37;
    k=m/1.000;
    mm=m*1000;  
    //Mostramos el resultado
    alert("El resultado en pulgadas es: " + p)
    alert("El resultado en kilometros es: " + k);
    alert("El resultado en milimetros es: " + mm);
}



function proNotas(){
    //Explicación del algoritmo
    alert("Algoritmo para determinar el promedio de notas de un estudiante en la materia de algoritmia ");

    //Declaravcion de variables
    let n1,n2,n3,n4,n5,n6,n7;

    //Capturamos los datos
    n1= parseInt(prompt("Ingrese la primera nota"));
    n2= parseInt(prompt("Ingrese la segunda nota"));
    n3= parseInt(prompt("Ingrese la tercera nota"));
    n4= parseInt(prompt("Ingrese la cuarta nota"));
    n5= parseInt(prompt("Ingrese la quinta nota"));
    n6= parseInt(prompt("Ingrese la sexta nota"));
    n7= parseInt(prompt("Ingrese la septima nota"));

    //Realizamos la opración
    pro= (n1+n2+n3+n4+n5+n6+n7)/7;
    //Mostramos el resultado
    if (pro>=6.1){
        alert("Aprobo la materia con : " + pro);
    }else{
        alert("Reprobo la materia con: " +pro);
    }
   
}

function desCompras(){
    //Explicación del algoritmo
    alert("Algoritmo que permita saber cuanto tiene que pagar un cliente en una fruteria");
    //Declaración de variables
    let a=0;
    let M=100;
    //Capturamos los datos
    a=parseInt(prompt("ingrese cuantos kilos va a comprar"));
    //Realizamos las opraciones
    z=a*M
    d=z*0.1
    t=z-d
    //Mostramos el resultado
    alert("Ud compro " + a + "kilos de manzana a " + z + "pesos")
    alert("con el descuento del 10% le quedo en " + t)
   
}

function salSemanal(){
    //Explicación del algoritmo
    alert("Algoritmo para calcular salario semanal de un obrero");
    //Declaración de variables
    let s = 12500;
    let se = 18000;
    let h = 40;
    //Capturamos los datos
    let t = parseInt(prompt("Ingrese horas trabajadas:"));
    //Realizamos la opración y se muestra resultado
    let st = 0;

    if (t <= h) {
        st = t * s;
        alert("Su salario semanal por " + t + " horas trabajadas es de: " + st + " pesos.");
    } else {
        let he = t - h;
        st = (h * s) + (he * se);
        alert("Su salario semanal por " + t + " horas trabajadas es de: " + st + " pesos, incluyendo " + he + " horas extras.");
    }
}



   





