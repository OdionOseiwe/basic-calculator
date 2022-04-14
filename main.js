
function getInput(){
    return document.querySelector('.head__result').innerText
}

function printGetInput(num){
    if(num == ""){
        document.querySelector('.head__result').innerText = num;
    }else{
        document.querySelector('.head__result').innerText = getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumber(num) {
    return Number (num.replace(/,/g,''));
}

function getHistory(){
    return document.querySelector('.head__history').innerText
}

function printGetHistory(num){
    document.querySelector('.head__history').innerText = num;
}
 


const mainNumbers  = (function (){

    let number = document.querySelectorAll('.number');
    for(var i  = 0  ; i < number.length; i++){
        number[i].addEventListener('click', function(){
            let output = reverseNumber(getInput());
            if (output != NaN){
                output = output + this.id;
                printGetInput(output);
            }
        })
    }

})();


const mainOperators =(function (){
    let operator = document.querySelectorAll('.operator');
    for(var i  = 0  ; i < operator.length; i++){
        operator[i].addEventListener('click', function(){
            if (this.id == "clear"){
                printGetHistory("");
                printGetInput("");
            }

            else if(this.id == "on"){
                printGetHistory("");
                printGetInput("0");
            }

            else if(this.id == "off"){
                printGetHistory("");
                printGetInput("");
            }
  
            else if(this.id == "suq"){
                let  input = getInput();
                let result =input*input
                 printGetInput(result);
            }

            else if(this.id == "%"){
                let  input = getInput();
                let result = input/100;
                printGetInput(result);
            }

            else if(this.id == "sup"){
                let  input = getInput();
                let result =input*input*input

                 printGetInput(result);
            }

            else if(this.id == "root"){
                let  input = getInput();
                let result = Math.sqrt(input)

                 printGetInput(result);
            }

            else if(this.id == "log"){
                let  input = getInput();
                let result = Math.log(input)
                 printGetInput(result);
            }

            else if(this.id == "sin"){
                let  input = getInput();
                let result = Math.sin(input)
                 printGetInput(result);
            }

            else if(this.id == "tan"){
                let  input = getInput();
                let result = Math.tan(input)
                 printGetInput(result);
            }

            else if(this.id == "cos"){
                let  input = getInput();
                let result = Math.cos(input)
                 printGetInput(result);
            }   

            else if(this.id == "del"){
                let output2 =  reverseNumber(getInput()).toString();
                if (output2) {
                    output2 = output2.substr(0,output2.length-1);
                    printGetInput(output2);
                }
            }

            else{
                let output = getInput();
                let history = getHistory();
                if (output != "") {
                    output = reverseNumber(output);
                    history = history + output;
                    
                    if (this.id == "=") {
                        let  result = eval(history);
                        printGetInput(result);
                        printGetHistory("");

                    }else{
                        history = history +this.id;
                        printGetHistory(history);
                        printGetInput("") 
                    }
                }
            }
    })
    }

})();
