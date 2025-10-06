function calcular() {
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  let imc = peso / (altura * altura);
  let resultado = document.getElementById("resultado");

  if (imc < 18.5) {
    classificacao = "O peso abaixo";
  } else if (imc < 25) {
    classificacao = "O peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III (mórbida)";
  }

  document.getElementById("resultado").innerHTML = `Seu IMC é 
  ${imc.toFixed(2) /*Deixa o IMC, com apenas duas casas decimais*/}
  . Você está com ${classificacao}`;
}
