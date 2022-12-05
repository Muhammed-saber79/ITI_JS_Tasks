//=========================== Assignment 3 =============================
//********** taking students data via prompt **********/
let stdudentsNumber=Number(prompt("enter the number if students: "));
let nameRegex=/^([a-z]{2,})$/;
let emailRegex=/^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/; //([\.-]?\w+)*
let numberFlag=true;

// const validateName=name=>{
//     if(nameRegex.test(name) && name != null){
//         return true;
//     }else{
//         return false;
//     }
// }

// const validateEmail=email=>{
//     if(emailRegex.test(email)){
//         return true;
//     }else{
//         return false;
//     }
// }

// const validateGrade=grade=>{
//     if(!isNaN(grade)){
//         return true;
//     }else{
//         return false;
//     }
// }

// const validateDepartment=department=>{
//     if(department == 'OS' || department == 'AI' || department == 'SD'){
//         return true;
//     }else{
//         return false;
//     }
// }
//======================= another way ====================
function validate(variable){
    switch(variable){
        case studentName:
            if(nameRegex.test(studentName) && studentName != null){
                return true;
            }else{
                return false;
            }
            break;
        case grade:
            if(!isNaN(grade)){
                return true;
            }else{
                return false;
            }
            break;
        case email:
            if(emailRegex.test(email)){
                return true;
            }else{
                return false;
            }
            break;
        case department:
            if(department == 'OS' || department == 'AI' || department == 'SD'){
                return true;
            }else{
                return false;
            }
            break;
    }
}

while(numberFlag){
    if(isNaN(stdudentsNumber)){
        stdudentsNumber=Number(prompt("input is incorrect, please try again: "));
    }else{
        numberFlag=false;
    }
}



let studentData,studentArr,studentName,grade,email,department;
for(let i=0;i<stdudentsNumber;i++){
    let msg="enter student number ";


    while(true){
        let flag=true;
        studentData=prompt(msg+(i+1));
        studentArr=studentData.split(',');
        
        if(studentData.length < 4){
            msg="all student data is required, tyr again...!";
            flag=false;
        }else{
            studentName=studentArr[0];
            grade=Number(studentArr[1]);
            email=studentArr[2];  
            department=studentArr[3];
            
            if(!validate(studentName)){
                msg="name is invalid, please try again...!";
                console.log('nooooo');
                flag=false;
            }else if(!validate(grade)){
                msg="grade is not a number, please try again...!";
                flag=false;
            }else if(!validate(email)){
                msg="email pattern is invalid, please try again...!";
                flag=false;
            }else if(!validate(department)){
                msg="department should be one of [OS,AI,SD]";
                flag=false;
            }else{
                console.log("passed...");
                console.table(studentArr);
                break;
            }
        } 
    }


    // while(flag){
    //     studentData=prompt(msg+(i+1));
    //     if(nameRegex.test(studentName)==true){ //studentName.match()
    //         console.log('yes..');
    //         if(!isNaN(grade)){
    //             console.log("yes for grade...");
    //             if(emailRegex.test(email)){
    //                 if(department=='OS'||department=='AI'||department=='SD'){
    //                     console.log(studentName,grade,email,department);
    //                     flag=false;
    //                 }else{
    //                     msg="choose one of these values[OS,AI,SD]";
    //                     flag=false;
    //                 }
    //             }else{
    //                 msg="email is invalid, please try again...";
    //                 flag=false;
    //             }
    //         }else{
    //             msg="grade is invalid, please try again...";
    //             flag=false;
    //         }
    //     }else{
    //         msg="name is invalid, please try again...";
    //         flag=false;
    //     }
    // }    
}
