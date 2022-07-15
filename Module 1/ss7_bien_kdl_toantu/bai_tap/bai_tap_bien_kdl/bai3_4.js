function areaCircle(){
    var r = Number(document.getElementById('r').value);
    var pi = 3.14;
    var s = parseFloat(pi*r*r);
    var c = parseFloat(pi*2*r);
    var output = document.getElementById('output');
        output.setAttribute("value", s);
        output.setAttribute("value", c);
    console.log(s)
    console.log(c)
}