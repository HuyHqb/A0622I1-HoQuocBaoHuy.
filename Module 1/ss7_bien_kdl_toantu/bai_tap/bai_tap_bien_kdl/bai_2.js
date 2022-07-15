function changeF(){
    var c = Number(document.getElementById('doC').value);
    var f = parseFloat((c/5)*9+32);
    var output = document.getElementById('output');
    output.setAttribute("value", f);
}