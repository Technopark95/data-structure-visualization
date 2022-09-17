
/*

Copyright 2020 Anoop Singh, Graphical Structure

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.



*/

_canvas.style.display = "none";
let truthTableWrapper =  document.getElementById("boolean-table");

const convertBoolToInt = (val) => { return  val ? 1 :0; }

const impliesTo = (a,b) => {

    let implied = [];
    for (let i = 0 ; i < a.length ; i++) {
        if ( a[i] == 1 && b[i] == 0 ) implied.push(0);
        else implied.push(1);
    }

    return implied;

}

const union = (a,b) => {

    let union = [];
    for (let i = 0 ; i < a.length ; i++) {
        if ( a[i] == 1 || b[i] == 1 ) union.push(1);
        else union.push(0);
    }

    return union;

}

const intersection = (a,b) => {

    let intersected = [];
    for (let i = 0 ; i < a.length ; i++) {
        if ( a[i] == 1 && b[i] == 1 ) intersected.push(1);
        else intersected.push(0);
    }
    return intersected;

}

const not = (list) => {

    let inverted = [];
    for (let items of list) {

        if (items == 1) inverted.push(0);
        else inverted.push(1);

    }

    return inverted;


}

var expressionValue = {};


var infixToPostfix = (infix) => {

    
// Created an empty array
var stackarr = [];
 
// Variable topp initialized with -1
var topp = -1;
 
// Push function for pushing
// elements inside stack
function push(e) {
    topp++;
    stackarr[topp] = e;
}
 
// Pop function for returning top element
function pop() {
    if (topp == -1)
        return 0;
    else {
        var popped_ele = stackarr[topp];
        topp--;
        return popped_ele;
    }
}
 
// Function to check whether the passed
// character is operator or not
function operator(op) {
    if (op == '>' || op == '|' ||
        op == '&' || op == '<' ||
        op == '(' || op == ')') {
        return true;
    }
    else
        return false;
}
 
// Function to return the precedency of operator
function precedency(pre) {
    if (pre == '@' || pre == '(' || pre == ')') {
        return 1;
    }
    else if (pre == '|') {
        return 2;
    }
    else if (pre == '&') {
        return 3;
    }
    else if (pre == '>' || pre == '<') {
        return 4;
    }
    else if (pre == '\'') {
        return 5;
    }
    else
        return 0;
}
 
// Function to convert Infix to Postfix
function InfixtoPostfix(infix) {
 
    // Postfix array created
    var postfix = [];
    var temp = 0;
    push('@');
    infixval = infix;
 
    // Iterate on infix string
    for (var i = 0; i < infixval.length; i++) {
        var el = infixval[i];
 
        // Checking whether operator or not
        if (operator(el)) {
            if (el == ')') {
                while (stackarr[topp] != "(" ) {
                    postfix[temp++] = pop();
                }
                pop();
            }
 
            // Checking whether el is (  or not
            else if (el == '(') {
                push(el);
            }
 
            // Comparing precedency of el and
            // stackarr[topp]
            else if (precedency(el) > precedency(stackarr[topp])) {
                push(el);
            }
            else {
                while (precedency(el) <=
                    precedency(stackarr[topp]) && topp > -1) {
                    postfix[temp++] = pop();
                }
                push(el);
            }
        }
        else {
            postfix[temp++] = el;
        }
    }
 
    // Adding character until stackarr[topp] is @
    while (stackarr[topp] != '@') {
        postfix[temp++] = pop();
    }
 
    // String to store postfix expression
    var st = "";
    for (var i = 0; i < postfix.length; i++)
        st += postfix[i];

    return st;
 
}

return InfixtoPostfix(infix);

}

var tabValue = (columnValue,list,i) => {

    return `
    <div class="boolean-column" style="width:auto;min-width:80px;height:auto;justify-content:center;display:flex;flex-direction:column;text-align:center;">
    <p style="height:30px;display: flex;
    align-items: center;
    width:100%;
    justify-content: center;">&nbsp;&nbsp;&nbsp;${ typeof(list) == "object" ? list[i] : list}&nbsp;&nbsp;&nbsp;</p>
    ${columnValue}
    </div>
    `;
}

const getVariablesFromExpression = (expression) => {

   return  Array.from(new Set(expression.match(/[a-zA-Z]/g)));


}

const validateParenthesis = (expression) => {

    let flag = 0;

    for(let char of expression) {

        if (char == "(") ++flag;
        else if (char == ")") -- flag;
    }

    return !flag;

}

var truthTable = (expression) => {

    expression = "("+expression+")";

    if (!validateParenthesis(expression)) {
        return;
    }

    truthTableWrapper.innerHTML = "";

    let list = getVariablesFromExpression(expression);
    let noOfVars = list.length;

 for (let i = 0 ; i < noOfVars ; i++) {

    let sampleSpace = sampleSpaceMaker(noOfVars-i,noOfVars,list);

    document.getElementById("boolean-table").insertAdjacentHTML("beforeend",tabValue(sampleSpace,list,i));

 }

 let postfixedExpression = infixToPostfix(expression)
 console.log(postfixedExpression);

 evaluateExpression(postfixedExpression);


}

const appendCellValue = (cellvalue,i) => {

    return`
    <label style="height:30px;width:100%;text-align:center;display: flex;
    align-items: center;
    justify-content: center;
    ">
    ${cellvalue}
    </label>
    `;
}

let colToggle = false;
const sampleSpaceMaker = (M,n,list) => {

    let c = false;
    let columnValue = "";
    let arrayVal = []
    for (let x = M; x > M-1; x--) {
        for (let y = 0; y < Math.pow(2, n);) {
            for (let z = 0; z < Math.pow(2, x - 1); z++) {
                columnValue += appendCellValue(convertBoolToInt(c),colToggle);
                arrayVal.push(convertBoolToInt(c));
                colToggle = !colToggle;
            }
            c = !c;
            y = y + Math.pow(2, x-1);
        }
        c = false;
    }

    expressionValue[list[n-M]] = arrayVal;
    return columnValue;


}

const columnMaker = (list) => {

    let columnData = "";
    for (let data of list) {
        columnData += appendCellValue(data);
    }
    return columnData;

}

const evaluateExpression = (postfixedExpression) => {

    try {
    let exp = postfixedExpression;

    let stack = [];

    let alphabeticalExpression,calculatedExpression,columnData,tabVal;

    for(let i=0;i<exp.length;i++)
    {
        let c=exp[i];
          
        // If the scanned character is an operand (number here),
        // push it to the stack.
        if((c >="A" && c <="Z") || (c >= "a" && c <= "z"))
        stack.push({displayExp:c,value:expressionValue[c]});
          
        else if (c == "\'") {
            let top = stack.pop();
            alphabeticalExpression = `(${top.displayExp}${c})`;
            calculatedExpression = not(top.value);
            stack.push({displayExp:alphabeticalExpression,value:calculatedExpression});
            columnData = columnMaker(calculatedExpression);
            tabVal = tabValue(columnData,alphabeticalExpression);
            document.getElementById("boolean-table").insertAdjacentHTML("beforeend",tabVal);
            console.log(stack[stack.length-1]);
        }
        
        else
        {
            let val1 = stack.pop();
            let val2 = stack.pop();
              
            switch(c)
            {
                case '|':
                     alphabeticalExpression = `(${val2.displayExp}&nbsp;${c}&nbsp;${val1.displayExp})`;
                     calculatedExpression = union(val2.value, val1.value);
                     stack.push({displayExp:alphabeticalExpression,value:calculatedExpression});
                     columnData = columnMaker(calculatedExpression);
                     tabVal = tabValue(columnData,alphabeticalExpression);
                     document.getElementById("boolean-table").insertAdjacentHTML("beforeend",tabVal);
                    break;
                  
                case '&':
                     alphabeticalExpression = `(${val2.displayExp}&nbsp;${c}&nbsp;${val1.displayExp})`;
                     calculatedExpression = intersection(val2.value, val1.value);
                     stack.push({displayExp:alphabeticalExpression,value:calculatedExpression});
                     columnData = columnMaker(calculatedExpression);
                     tabVal = tabValue(columnData,alphabeticalExpression);
                     document.getElementById("boolean-table").insertAdjacentHTML("beforeend",tabVal);
                     break;
                  
                case '>':
                     alphabeticalExpression = `(${val2.displayExp}&nbsp;${c}&nbsp;${val1.displayExp})`;
                     calculatedExpression = impliesTo(val2.value, val1.value);
                     stack.push({displayExp:alphabeticalExpression,value:calculatedExpression});
                     columnData = columnMaker(calculatedExpression);
                     tabVal = tabValue(columnData,alphabeticalExpression);
                     document.getElementById("boolean-table").insertAdjacentHTML("beforeend",tabVal);
                    break;
          }
          console.log(stack[stack.length-1]);
        }
       
    }
}
catch(e) {
    truthTableWrapper.innerHTML = "";
    console.log("Unable to evalute expression");
}

}