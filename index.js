// Write your solution in this file!

 function updateDriverWithKeyAndValue(dirver,key,value)
{
    let driver1=Object.assign({},dirver,{[key]:value})
  return dirver1;
}

function destructivelyUpdateDriverWithKeyAndValue(dirver,key,value){
   let dirver4=dirver
  dirver4[key]=value;
  return dirver4;
}
function deleteFromDriverByKey(dirver,key){
  let dirver2 = Object.assign({}, dirver);
  delete dirver2[key];
   return dirver2;
}
function destructivelyDeleteFromDriverByKey(dirver,key){
 let dirver3=dirver;
 delete dirver3[key];
 return dirver3;
 
}