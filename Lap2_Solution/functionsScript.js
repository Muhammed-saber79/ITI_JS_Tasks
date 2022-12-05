//printVariables(); //trying to call function before the definition it works

// function printVariables(value1,value2,value3=0){
//     let arr=[value1,value2,value3];
//     return arr;
// }

//************ try to print the addetional arguments usings "argments" ***********/
// function printVariables(value1,value2,value3=0){
//     let arr=[value1,value2,value3];
//     for(let i=0 ; i<arguments.length ; i++){
//         arr[i]=arguments[i];
//     }
//     return arr;
// }

//try to add new variables inside the fnction body and calling them before the fnction call
// let localVal=90; //define the variable before function definition

// function printVariables(value1,value2,value3=0){
//     console.log(localVal); //it reslts 90 because the variable is global
//     var localVar=3;
//     var testingVar=5;
//     let arr=[value1,value2,value3];
//     for(let i=0 ; i<arguments.length ; i++){
//         arr[i]=arguments[i];
//     }
//     return arr;
// }

/************* function after removing let from localVal ***********/
//results the same output
// localVal=90; //define the variable before function definition

// function printVariables(value1,value2,value3=0){
//     console.log(localVal); //it reslts 90 because the variable is global
//     var localVar=3;
//     var testingVar=5;
//     let arr=[value1,value2,value3];
//     for(let i=0 ; i<arguments.length ; i++){
//         arr[i]=arguments[i];
//     }
//     return arr;
// }


//************ making function expression ************/
// let printingVariables=function printVariables(value1,value2,value3=0){
//     var localVar=3;
//     var testingVar=5;
//     let arr=[value1,value2,value3];
//     for(let i=0 ; i<arguments.length ; i++){
//         arr[i]=arguments[i];
//     }
//     return arr;
// };

//************ making arrow function ************/
// let printingVariables=(value1,value2,value3=0)=>{
//     var localVar=3;
//     var testingVar=5;
//     let arr=[value1,value2,value3];
//     return arr;
// };


//=========================== Assignment 2 =============================
//********** taking user name via prompt **********/
// let userName=prompt("enter ur name: ");

// if(!isNaN(userName)){
//     prompt("input is incorrect, please try again: ");
// }else{
//     let nameUpper=userName.toUpperCase(userName);
//     console.log(nameUpper);
// }

