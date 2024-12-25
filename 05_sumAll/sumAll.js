const sumAll = function(num1 , num2) {
    let sum = 0;
    let smallNum = 0;
    let largeNum = 0;
    
    
    if( !Number.isInteger(num1) || !Number.isInteger(num2))
        return 'ERROR';
    
    if(num1  < 0 || num2 < 0)
        return 'ERROR';
    
    if(num1 < num2){
        smallNum = num1;
        largeNum = num2;
    }else{
        largeNum = num1;
        smallNum = num2;
    }

    for(let i = smallNum ; i<=largeNum ; i++){
        
        sum = sum  + i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
