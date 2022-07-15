function changeMoney(){
    var a = document.getElementById('giaTri').value;
    var b = document.getElementById('fCurrency').value;
    var c = document.getElementById('tCurrency').value;
    var donVi = 'usd'
    if(c=='VND'){
        donVi = 'Vnd'
    }
    if(b == 'VND' && c == 'USD'){
        document.getElementById('result').innerHTML = 'Result: ' + a/23000 +' '+ donVi;
    } else if (b == 'USD' && c == 'VND' ){
        document.getElementById('result').innerHTML = 'Result: ' + a*23000 +' ' + donVi;
    } else{
        document.getElementById('result').innerHTML = 'Result: ' + a +' ' +  donVi;
    }
}
