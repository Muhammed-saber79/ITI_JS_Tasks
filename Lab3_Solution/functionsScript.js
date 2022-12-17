//*********** convert text style to pascal case ***********/
function pascal(fullName){
    nameArr=fullName.split(" ");
    newArr="";
    for(word in nameArr){
        for(let i=0;i<nameArr[word].length;i++){
            if(i==0){
                newArr+=nameArr[word][0].toUpperCase(); 
            }else{
                newArr+=nameArr[word][i].toLowerCase();
            }
        }
        newArr+=" ";
    }
    return newArr;
}

//*********** get the longest word in the statement ***********/
function longestWord(stmt){
    wordsArr=stmt.split(" ");
    for(let i=0 ; i<wordsArr.length ; i++){
        if(wordsArr[i].length > wordsArr[i+1].length){ 
            return wordsArr[i];
        }
    }
}

//*********** sorting string in alpha order ***********/
function sortAlpha(word){
    let charArr=word.split('').sort().join('');
    return charArr;
}

//*********** get month ***********/

function monthFullName(mName){
    switch(mName){
        case 'Jan':
            return 'January';
            break;
        case 'Feb':
            return 'February';
            break;
        case 'Mar':
            return "March";
            break;
        case 'Apr':
            return 'April';
            break;
        case 'May':
            return 'May';
            break;
        case 'Jun':
            return 'June';
            break;
        case 'Jul':
            return 'July'
            break;
        case 'Aug':
            return 'August';
            break;
        case 'Sep':
            return 'September';
            break;
        case 'Oct':
            return 'October';
            break;
        case 'Nov':
            return 'November';
            break;
        case 'Dec':
            return 'December';
            break;
    }
}

function getMonth(){
    let dateArr=Date().split(" ");
    let monthName=monthFullName(dateArr[1]);
    return monthName;
}

//*********** get 5 numbers randomly ***********/
function getFiveNumbers(){
    let arr=[];
    for(let i=1 ; i<=5 ; i++){
        arr.push(Math.floor(Math.random()*(9-4)+4));
    }
    return arr;   
}

//*********** array operations ***********/
let arrNums=[2,1,3,2,7,2,8,4,3,6,10,12,9];

let sortAsc=()=>arrNums.sort((a,b)=>a-b);   //===sorting ascending===

let sortDesc=()=>arrNums.sort((a,b)=>b-a);   //===sorting descending===

let afterFilter=arrNums.filter((elem)=>elem>5);   //===get numbers greater than 5=== 

let getMax=function(arr){   //===get max num of array===
    let max=0;
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

let getMin=function(arr){   //===get min num of array===
    min=arr[0];
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}


let newArrFrom=Array.from(arrNums,item=>item*5);  //===copy arrNums to new array multiplied by 5

 
let cleanArr=arrNums.filter((value,index,arr)=>arr.indexOf(value)==index);  //===clean array===


function getClean(arr){         //********* not working ********/
    for(let i=0 ; i<arr.length-1 ; i++){
        if(arr[i]==arr[i+1]){
            arr.splice(i,1,arr[i]);
        }
    }  
    console.log(arr);
}  

getClean(arrNums);
