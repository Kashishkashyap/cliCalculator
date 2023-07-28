import {question} from 'readline-sync'; // this question always returns a string

type Operator= "+"|"-"|"*"|"/";

function main():void{

    const firstinput: string= question("Enter first no.\n");
    const operator: string= question("Enter operator\n");
    const secondinput: string= question("Enter second no.\n");

    const validInput:boolean= isNum(firstinput)&& isOperator(operator)&& isNum(secondinput);

    if(validInput){
        const num1= parseInt(firstinput);
        const num2= parseInt(secondinput);
        const result= calculate(num1,operator as Operator,num2);
        console.log(result);
    }
    else{
        console.log("\nInvalid Input");
        main();
    }
}
function calculate(num1:number, operator:Operator, num2: number)
{
    switch(operator){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return num1/num2;
    }
}
function isOperator(str:string):boolean{
   switch(str){
    case "+":
    case "-":
    case "*":
    case "/":
        return true;
    default:
        return false;
    }
}
function isNum(str:string):boolean{
    const maybenum= parseInt(str);
    const ans: boolean= (!isNaN(maybenum));
    return ans;
}
main();