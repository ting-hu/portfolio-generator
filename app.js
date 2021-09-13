const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

const printProfileData = (profileDataArr) =>{
    for(let i =0; i < profileDataArr.length;i++){
        console.log(profileDataArr[i]);
    }
    
    console.log("==========");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

/*const addNums = (numOne, numTwo)=>{
    console.log(numOne,numTwo);
    return numOne+numTwo;
}

const sum = addNums(5,3);*/



