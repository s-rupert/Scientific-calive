
let istrue=false;
function factorial(n){
    if(n==0 || n==1){
        return 1;
    } else{
        return n*factorial(n-1);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    let currentValue = '';
    
    function evaluate() {
            const convertedvalue = currentValue
                .replace("×", "*")
                .replace("÷", "/")
                .replace("%", "*0.01") 
                .replace("sin", "Math.sin")
                .replace("cos", "Math.cos")
                .replace("tan", "Math.tan")
                .replace("π", "Math.PI") 
                .replace("log", "Math.log10")
                .replace("e", "Math.E")
                .replace("√", "Math.sqrt")
                .replace("ln", "Math.log")
                .replace("^","**")
                ;
        try {
            const result = eval(convertedvalue);
            currentValue = result.toString();
            display.value = currentValue;
        } catch (error) {
            display.value = "Error";
        }

    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const values = button.innerText;
            if (values == "AC") {
                currentValue = "";
                display.value = currentValue;
            } else if (values == "=") {
                
                istrue=true;
                evaluate();

            }else if(values=="x!"){
                currentValue=factorial(currentValue).toString();
                display.value+='!';
            } 
            else if(values=="xy"){
                currentValue+='^'
                display.value=currentValue;
            }
            else {
                if (istrue == false) {
                    currentValue += values;
                    display.value = currentValue;
                } else {
                    currentValue = values;
                    istrue = false;
                    display.value = "";
                    display.value = currentValue;
                }


            }

        })
    }
})

