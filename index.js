// Write your solution in this file!

 function updateDriverWithKeyAndValue(dirver,key,value)
{
  dirver[key]=value;
  return dirver;
}

function destructivelyUpdateDriverWithKeyAndValue(dirver,key,value){
  let driver1=Object.assign({},dirver,{[key]:value})
  return dirver;
}
function deleteFromDriverByKey(dirver,key){
  const dirver2 = Object.assign({}, obj);
  delete newObj[key];
}
function destructivelyDeleteFromDriverByKey(dirver,key){
 let dirver3=dirver;
 delete dirver3[key];
}