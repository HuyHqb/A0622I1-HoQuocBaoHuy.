function checkBmi() {
    let w = Number(document.getElementById('weight').value);
    let h = Number(document.getElementById('height').value);
    let bmi = parseFloat(w/(h*h));
    alert(bmi )
    if (bmi < 18.5){
        document.getElementById('result').innerText = 'Result is : ' + 'Underweight';
        } else if ( bmi < 25){
        document.getElementById('result').innerText = 'Result is : ' + 'Normal';
          } else if (bmi< 30){
            document.getElementById('result').innerText = 'Result is : ' + 'Overweight';
            }else 
            document.getElementById('result').innerText = 'Result is : ' + 'Obese';    
}