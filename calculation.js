
function calculate(){
    let altura = parseInt(document.getElementById('valor1').value);
    let peso = parseInt(document.getElementById('valor2').value);

    document.getElementById('res1').innerHTML="Por la información que ingresaste: ";

    altura = altura*0.01;
    let pesoMinIdeal=altura*altura*18.5;
    let pesoMaxIdeal=altura*altura*24.9;

    pesoMinIdeal = pesoMinIdeal.toFixed(2);
    pesoMaxIdeal = pesoMaxIdeal.toFixed(2),

    document.getElementById('res2').innerHTML="Altura: "+altura+" metros";

    document.getElementById('res3').innerHTML="Peso: "+peso+" kilos";

    bmi = peso/(altura*altura);
    bmi = bmi.toFixed(2);

    categoria = calcularCategoriaPeso(bmi);
    

    document.getElementById('res4').innerHTML="Su BMI es de "+bmi+", lo que indica que su peso está en la categoría de "+categoria+" para adultos de su altura";
    document.getElementById('res5').innerHTML="Para su estatura, el rango de peso saludable va desde "+pesoMinIdeal+" kg hasta "+pesoMaxIdeal+" kg.";
    document.getElementById('res6').innerHTML="Las personas con sobrepeso u obesidad tienen un mayor riesgo de padecer enfermedades crónicas como hipertensión arterial, diabetes y colesterol alto";
     
}

function calcularCategoriaPeso(bmi){
    let categoria="";
    if(bmi<18.5){
        categoria="Bajo peso";
    }else if(bmi>=18.5&&bmi<=24.9){
        categoria="Normal";
    }else if(bmi>=25&&bmi<=29.9){
        categoria="Sobrepeso";
    }else if(bmi>=30&&bmi<=34.9){
        categoria="Obesidad grado I";
    }else if(bmi>=35&&bmi<=39.9){
        categoria="Obesidad grado II";
    }else if(bmi>=40){
        categoria="Obesidad grado III";
    }
    return categoria;
}
