console.log('Welcome Ascend Design Media');

const fs = require('fs');
//fs.appendFile('message.txt','Welcome Ascend Design Media.js');

const os=require('os');
var user=os.userInfo();

const externalJS=require('./external_Js');
console.log("Age and Company Name: "+ externalJS.age +', '+ externalJS.company);

var response=externalJS.userDetails();//invoke external function from external JS
console.log("Ger User details response:"+ response );

var getResult=externalJS.addVal(10, -5);//added two parameters using function
console.log("Added value result: "+ getResult );

const _=require('lodash');
console.log("check getting value is string or not: "+ _.isString('vadivel'));
console.log("check getting value is string or not: "+ _.isString(1984));

var filterArray=_.uniq(['vadivel','raj','17','chinnasamy','vadivel',2, 25, 1984, 2 ]);
console.log("check the array value and removed duplicate values: ", `${filterArray}`);
console.log("check the array value and removed duplicate values: "+_.uniq(['2','4','6','8','2']));

console.log("User Details: ", user.username);
//fs.appendFile('message.txt',`Welcome ${user.username}`);/*using template method*/
fs.appendFile('message.txt','welcome '+ user.username);//using concodinate method