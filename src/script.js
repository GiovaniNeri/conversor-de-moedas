function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);
  var valorEmDolar = valorEmReal / 5.23;
  var valorEmDolarFixado = valorEmDolar.toFixed(2);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var ValorConvertido = "Valor em Dolar U$: " + valorEmDolarFixado;
  elementoValorConvertido.innerHTML = ValorConvertido;
}
