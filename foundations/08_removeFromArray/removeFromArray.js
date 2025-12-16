const removeFromArray = function(arrays , ...removeDigit) {
    
    const newArray = [];
    for(let i = 0 ; i <=  arrays.length; i++){
        if(!removeDigit.includes(arrays.at(i)) ){
            newArray.push(arrays.at(i));
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
