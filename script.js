var dialog = document.querySelector('dialog');

document.querySelector('#solve1').onclick = function() {

  var a = parseFloat(document.getElementById('from1').value);
  var b = parseFloat(document.getElementById('from2').value);

//Для корректного вычисления суммы чисел с плавающей точкой, необходимо увеличить число до целого, а после сложения разделить на на тоже число на которое увеличили. Следующая функция вычисляет сколько чисел стоит после запятой. 
  const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0));

  var quantityNilA = f(a);
  var quantityNilB = f(b);
  
   
  var solve;

//по условию проверяем какое это число,если целое просто складываем, если сплавающей точкой, то приводим его до целого и вычисляем, если введены знаки отличные от int&&float заканчиваем вычисление.
  if (Number.isInteger(a) && Number.isInteger(b)) {
    solve = a + b;
    document.getElementById('result').innerHTML = solve;
  } else if (quantityNilB>0 || quantityNilA>0) {
	
	var numberWithAddNil;

    if (quantityNilA > quantityNilB || quantityNilA == quantityNilB) {
   
      numberWithAddNil = addNil(quantityNilA);
     
      solve = ((a * numberWithAddNil) + (b * numberWithAddNil)) / numberWithAddNil;
      document.getElementById('result').innerHTML = solve;
    } else {
   // alert('a<b');
      numberWithAddNil = addNil(quantityNilB);
      solve = ((a * numberWithAddNil) + (b * numberWithAddNil)) / numberWithAddNil;
      document.getElementById('result').innerHTML = solve;
    }

  } else if (isNaN(a) == true || isNaN(b) == true) {
    document.getElementById('result').innerHTML = "Введите два числа!";
  }
	//выводим окно с результатом
  dialog.show();


};

//закрываем окно результата
document.querySelector('#close').onclick = function() {
  dialog.close();
};

//функция для увеличения нулей после запятой
function addNil(quantilyNil) {

  var str = '1';
  while (quantilyNil > 0) {
    str = str + '0';
    quantilyNil = quantilyNil - 1;
  }
	
  return parseFloat(str);
}
