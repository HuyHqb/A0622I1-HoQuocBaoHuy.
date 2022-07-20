  function calculator(operator){
    var a = Number( document.getElementById("a").value);
    var b = Number( document.getElementById("b").value);
    var kq = 0;
    switch(operator){
      case '+': kq = a+b;
            break;
      case '-': kq = a-b;
            break;
      case '*': kq = a*b;
            break;
      case '/': kq =parseFloat(a/b);
      if(b==0){
          alert('b phải khác 0');
      }else{
            }
      break;
    }
    document.getElementById('result').innerHTML = 'Result : ' + kq;
  }
