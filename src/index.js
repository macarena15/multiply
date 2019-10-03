module.exports = function multiply(first, second) {
  // your solution
 //var a = parseInt(first) * parseInt(second);
 //return a.toLocaleString('fullwide', {useGrouping:false})

  var a = first.split('').reverse();
  var b = second.split('').reverse();

  var numbers = [];

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      var c = a[i] * b[j];
      numbers[i + j] = (numbers[i + j]) ? numbers[i + j] + c : c;
    }
  }

  for (var i = 0; i < numbers.length; i++) {
    var numb = numbers[i] % 10;
    var move = Math.floor(numbers[i] / 10);
    numbers[i] = numb;

    if (numbers[i + 1])
      numbers[i + 1] += move;
    else if (move != 0)
      numbers[i + 1] = move;
  }


  return numbers.reverse().join('');
}

 
