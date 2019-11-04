// Write your solution in this file!


function updateDriverWithKeyAndValue(driver, key, value){
    let driver1= Object.assign({}, driver, { [key]: value });
    console.log(driver2);
    return driver1;
    
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    let driver3= driver;
    driver3[key]=value;
    return driver3;
}



function deleteFromDriverByKey(driver, key){
    let driver4 = Object.assign({},driver);
    delete driver4[key];
    console.log(driver4);
    return driver4;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    let driver5=driver;
    delete driver5[key];
    return driver5;
}

