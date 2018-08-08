console.log("call external java script file using node js require method");

//console.log(module);// find the what are modules are there in our node js
module.exports.age=34;
module.exports.company='Ascend Desgin Media';


module.exports.userDetails=()=>{
console.log('user detail function called');
return module.exports.company;

}

module.exports.addVal=(a,b)=>{
    return a+b;
}