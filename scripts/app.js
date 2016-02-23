
function init() {

    //Initialize event listener for Basic Calculator
    var basicCalcBtn = document.getElementById('basic-calc');
    basicCalcBtn.addEventListener('click', function(){
       //get values from the fields after the button is clicked
        var basicOperation = document.getElementById('basic-operation').value;
        var basicNum1 = Number(document.getElementById('basic-num-1').value);
        var basicNum2 = Number(document.getElementById('basic-num-2').value);

        //Calculate the answer
        var answer  = evaluate(basicOperation)(basicNum1, basicNum2);

        //Display answer to answer field
        var basicAns = document.getElementById('basic-answer-alert');
        basicAns.innerHTML = answer.toFixed(4);

        //Factory to produce a function that does plus, minus, multiply and divide
        function evaluate(operation) {
            return function(num1, num2) {
                if (operation == '+'){
                    return num1 + num2;
                } else if(operation == '-') {
                    return num1 - num2;
                } else if(operation == '*') {
                    return num1 * num2;
                } else {
                    return num1 / num2;
                }
            };
        }
    });

    //Initalize event listener for Trip Calculator
    var tripCalcBtn = document.getElementById('trip-calc');
    tripCalcBtn.addEventListener('click', function(){
        //get the values of the Trip fields after the button is clicked
        var tripDistance = Number(document.getElementById('trip-distance').value);
        var tripMpg = Number(document.getElementById('trip-mpg').value);
        var tripCost = Number(document.getElementById('trip-cost').value);
        var tripSpeed = Number(document.getElementById('trip-speed').value);

        //Calculate the answer
        var answer = evaluate(tripSpeed)(tripDistance, tripMpg, tripCost);

        //Display the answer to the answer field
        var tripAns = document.getElementById('trip-answer-alert');
        tripAns.innerHTML = answer.toFixed(2);

        //Based on the speed return a function with the correct formula
        function evaluate(speed) {
            return function(distance, mpg, cost) {
                if(speed < 60){
                    return distance / mpg * cost;
                } else {
                    return distance / (mpg - (speed - 60) * 2) * cost;
                }
            };
        }
    });

    //Initialize event listener for BMI Calculator
    var bmiCalcBtn = document.getElementById('bmi-calc');
    bmiCalcBtn.addEventListener('click', function() {
        //get the values of the BMI fields after the button is clicked
        var bmiHeight = Number(document.getElementById('bmi-height').value);
        var bmiMass = Number(document.getElementById('bmi-mass').value);
        var bmiUnits = document.getElementById('bmi-units').value;

        //Calculate the answer
        var answer = evaluate(bmiUnits)(bmiMass, bmiHeight);

        //Display the answer to the answer field
        var bmiAns = document.getElementById('bmi-answer-alert');
        bmiAns.innerHTML = answer.toFixed(2);

        function evaluate(unitOfMeasure) {
            return function (mass, height){
                if(unitOfMeasure.toLowerCase() == 'metric'){
                  return (mass / (height * height));
                } else {
                  return (mass / (height * height))*703;
                }
            }
        }
    });

    //Initialize event listener for Mortgage Calculator
    var mortgageCalcBtn = document.getElementById('mortgage-calc');
    mortgageCalcBtn.addEventListener('click', function() {
        //get the values of the BMI fields after the button is clicked
        var mortgageLoan = Number(document.getElementById('mortgage-loan').value);
        var mortgageApr = Number(document.getElementById('mortgage-apr').value);
        var mortgageTerm = Number(document.getElementById('mortgage-term').value);

        //Calculate the answer
        var answer = calcMonthlyCost(mortgageLoan, mortgageApr, mortgageTerm);

        //Display the answer to the answer field
        var mortgageAns = document.getElementById('mortgage-answer-alert');
        mortgageAns.innerHTML = answer.toFixed(2);

        function calcMonthlyCost(loan, apr, term) {
            return loan * apr * Math.pow(1 + apr, term) / (Math.pow(1 + apr, term) - 1);
        }
    });

    //Change the units in the label for BMI fields based on unit selected
    var bmiUnitsSelect = document.getElementById('bmi-units');
    bmiUnitsSelect.addEventListener('change', function(){
        //Get the current value of select list
        var unitOfMeasure = bmiUnitsSelect.value;
        //Change the text in the label
        if(unitOfMeasure.toLowerCase() == 'imperial'){
            document.getElementById('bmi-mass-unit').innerHTML = "pounds";
            document.getElementById('bmi-height-unit').innerHTML = "inches";
        } else {
            document.getElementById('bmi-mass-unit').innerHTML = "kg";
            document.getElementById('bmi-height-unit').innerHTML = "m";
        }
    });

}// end of init function

init();