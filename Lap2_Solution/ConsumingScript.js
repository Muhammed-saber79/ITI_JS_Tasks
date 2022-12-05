//console.log(printVariables());

//********* try to print variables here ********/
//console.log(value1); //value is not defined so error will be resulted


//********** tyr to call function with values and print result ***********/
//console.log(printVariables(1,2,2)); //it works

//********** try to call function with less parameters **********/
//console.log(printVariables(1,2)); //we will solve the undefined problem by making defalt vale

//*********** testing new variables inside the function **********/
//console.log(localVal,testingVal); //results 'is not defined'
//console.log(printVariables(1,2,3));


//*********** testing new variables inside the function after calling **********/
//console.log(printVariables(1,2,3));
//console.log(localVal,testingVal); //results 'is not defined' also because these are local variables


//*********** testing new variable outside the function before calling **********/
// console.log(localVal); //results 90 because it is a global variable
// console.log(printVariables(1,2,3));


//*********** testing new variable outside the function after calling **********/
//console.log(printVariables(1,2,3));
//console.log(localVal); //results 90 also because it is a global variable


/************ after appling function expression ***********/
//console.log(printingVariables);