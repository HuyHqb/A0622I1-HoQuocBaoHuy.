
var a,b,op,kq;
var cache="";
var isCalced = false;

function changeScreen(number) {
    var screen = document.getElementById('screen').value;
    document.getElementById('screen').setAttribute("value",screen+number);
}

function addNumber(number){
    if (isCalced==true){
        document.getElementById('screen').setAttribute("value","");
        isCalced=false;
    }
    changeScreen(number);
    cache += String(number);
}

function addOperator(operator){
   
    changeScreen(" " + operator + " ");
    op = operator;

    if(isCalced==true){
        a=kq;
        isCalced=false;
    } else{
    a = Number(cache);
    cache="";
    }
}
    

function calc(){
    b = Number(cache)
    cache=""
    switch(op){
        case '+': kq = a+b;
       
        break;
        case '-': kq = a-b;

        break;
        case '*': kq = a*b;

        break;
        case '/': 
        if(b==0){
            alert('b phải khác 0');       
        } else {
            kq =parseFloat(a/b);
        }
        break;
      }
      document.getElementById('screen').setAttribute("value",kq);
      isCalced=true;
      console.log(a,b,op,kq)
}

function clearScreen(){
    a="";
    b="";
    op="";
    kq="";
    isCalced = false;
    cache="";
    document.getElementById('screen').setAttribute("value","");
}