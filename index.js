// Write your solution in this file!

 function updateDriverWithKeyAndValue(obj,key,value)
{
  obj[key]=value;
  return obj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  let driver=Object.assign({},dirver,{[key]:value})
  return obj;
}
function deleteFromDriverByKey(obj,key){
  const newObj = Object.assign({}, obj);
  delete newObj[key];
}
function destructivelyDeleteFromDriverByKey(dr,key){
 let newObj=obj;
 delete newObj[key];
}