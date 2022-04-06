//Código para el cuadrado
function perimetroCuadrado (lado) {
    return lado * 4;
};
function areaCuadrado (lado) {
    return lado * lado;
};
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    swal ("El perímetro de tu cuadrado es: " + perimetro);
};
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    swal ("El área de tu cuadrado es: " + area);
};

//Código para el círculo
const numeroPi = Math.PI;

function diametroCirculo (radio) {
    return radio * 2;
};
function perimetroCirculo (radio) {
    return diametroCirculo(radio) * numeroPi;
};
function areaCirculo (radio) {
    return numeroPi * (radio**2);
};
function calcularPerimetroCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    swal ("El perímetro de tu círculo es: " + perimetro);
}
function calcularAreaCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    swal ("El área de tu círculo es: " + area);
}
function calcularDiametroCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    swal ("El diámetro de tu círculo es: " + diametro);
}

//Código para triángulo isósceles 
function perimetroTriangulo (ladoA, ladoB, base) {
    return ladoA * 2 + parseInt(base);
}
function areaTriangulo (ladoA, ladoB, base) {
    return base * Math.sqrt(ladoA**2 - (base**2 / 4)) / 2;
}
function alturaTriangulo (ladoA, ladoB, base) {
    return Math.sqrt(ladoA**2 - (base**2 / 4));
}
function calcularPerimetroTriangulo () {
    const inputLadoA = document.getElementById("ladoA");
    const inputLadoB = document.getElementById("ladoB");
    const inputBase = document.getElementById("base");
    const valueLadoA = inputLadoA.value;
    const valueLadoB = inputLadoB.value;
    const valueBase = inputBase.value;
    const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase);
    if (valueLadoA !== valueLadoB){
        swal ("Los dos lados deben ser iguales");
    }
    else if (valueLadoA === valueBase) {
        swal ("Esto no es un triángulo isósceles");
    }
    else
        swal ("El perímetro de tu tríangulo es: " + perimetro);
}
function calcularAreaTriangulo () {
    const inputLadoA = document.getElementById("ladoA");
    const inputLadoB = document.getElementById("ladoB");
    const inputBase = document.getElementById("base");
    const valueLadoA = inputLadoA.value;
    const valueLadoB = inputLadoB.value;
    const valueBase = inputBase.value;
    const area = areaTriangulo(valueLadoA, valueLadoB, valueBase);
    if (valueLadoA !== valueLadoB){
        swal ("Los dos lados deben ser iguales");
    }
    else if (valueLadoA === valueBase) {
        swal ("Esto no es un triángulo isósceles");
    }
    else
        swal ("El área de tu tríangulo es: " + area);
}
function calcularAlturaTriangulo () {
    const inputLadoA = document.getElementById("ladoA");
    const inputLadoB = document.getElementById("ladoB");
    const inputBase = document.getElementById("base");
    const valueLadoA = inputLadoA.value;
    const valueLadoB = inputLadoB.value;
    const valueBase = inputBase.value;
    const altura = alturaTriangulo(valueLadoA, valueLadoB, valueBase);
    if (valueLadoA !== valueLadoB){
        swal ("Los dos lados deben ser iguales");
    }
    else if (valueLadoA === valueBase) {
        swal ("Esto no es un triángulo isósceles");
    }
    else
        swal ("El área de tu tríangulo es: " + altura);
}
