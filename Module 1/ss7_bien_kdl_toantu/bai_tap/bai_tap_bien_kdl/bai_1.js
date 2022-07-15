function avr(){
var toan = Number(document.getElementById('a').value);    
var ly =  Number(document.getElementById("b").value);
var  hoa =  Number(document.getElementById("c").value);
var dtb = parseFloat((toan+ly+hoa)/3);
var output = document.getElementById('output');
    output.setAttribute("value", dtb);
}


