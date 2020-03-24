$(document).ready(function () {
  $('.modal').modal();
});

$("#calcular").click(function () {
  alcool = $("#alcool").val().trim() != "" ? parseFloat($("#alcool").val()) : 0
  gasolina = $("#gasolina").val().trim() != "" ? parseFloat($("#gasolina").val()) : 0

  debugger;
  if (alcool > 0 && gasolina > 0) {
    var texto_resultado = ""

    pct_alcool = ((alcool/gasolina) * 100)
    pct_alcool = pct_alcool.toFixed(2)
    resultado = (pct_alcool <= 70) ? "alcool" : "gasolina"
    header_resultado = "Resultado: " + resultado
    texto_resultado = "Vale mais a pena abastecer com " + resultado + 
    ", pois o preço do alcool é " + pct_alcool + "% o valor da gasolina"

  } else {
    header_resultado = "Informações Incorretas"
    texto_resultado = "Verifique o preenchimento do valor do alcool e gasolina"
  }

  $('#header_resultado').empty().text(header_resultado)
  $('#texto_resultado').empty().text(texto_resultado)
});