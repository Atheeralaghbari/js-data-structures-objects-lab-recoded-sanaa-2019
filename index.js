// Write your solution in this file!

const driver={
    name: "Atheer",
    age: 24
};

function updateDriverWithKeyAndValue(driver, key, value){
    let driver1= Object.assign({}, driver, { [key]: value });
    console.log(driver2);
    return driver1;
    
}

updateDriverWithKeyAndValue(driver, "name", "Ahmed");

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    let driver3= driver;
    driver3[key]=value;
    return driver3;
}
destructivelyUpdateDriverWithKeyAndValue(driver, "age", "25");


function deleteFromDriverByKey(driver, key){
    let driver4 = Object.assign({},driver);
    delete driver4[key];
    console.log(driver4);
    return driver4;
}
deleteFromDriverByKey(driver, "age")


function destructivelyDeleteFromDriverByKey(driver, key){
    let driver5=driver;
    delete driver5[key];
    return driver5;
}
destructivelyDeleteFromDriverByKey(driver, "name")
