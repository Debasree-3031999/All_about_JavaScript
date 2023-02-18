// document.write('hello');
// console.log(1+1);


// console.log(_pi)

let firstName = "debasree";
let last_name = "ghosh"
let address = "main street";
address = "first street";
// console.log(firstName,last_name,address)


var shree=[1,2,3,3,4]

shree.forEach((el)=>{
    // console.log(shree[el])
})

let street="haridas";
let country="india";

let fullMailingAddress=street+" "+country;
// console.log(fullMailingAddress)

let score1=13;
let score2=16;
let score3=8;
let total_score=score1+score2+score3;
let average=total_score/3;

let plates=20;
let people=7;
let remaining_plates=plates%people;
remaining_plates++;
let message="There are "+remaining_plates+" plates available";
// console.log(total_score);
// console.log(average);
// console.log(m essage)

let no1="10.22";
let no2="5";
let no3=no1+no2;
let no4  = no1 + no2;
// console.log(no3)
const num=13;
// document.querySelector('.form').addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let valueR=document.getElementById('amount').value;
//     valueR=parseInt(valueR)
//     // console.log(valueR+num)
// })

// var rrr=null;
// console.log(rrr)

var fruits=["jj","jj","fgf","gbfg",5];
var fst_value=fruits[0];
fruits[fruits.length-1]="o"
// console.log(fruits)

function greet(n){ //n is a parameter and also it is a variable name
    // console.log('hello there '+n)
}

greet("bob");//"bob" is an argument, this is n actual value and it will be any data type,when we call or invoke we pass the argument
greet(true);
greet(8);

var height=calculate("hiiii")
var width=calculate(80)
function calculate(value){
    // console.log("in calculate function",value);
    return value
}
let area=[height,width];
// console.log(area)


function calculateTotal(subtotal,tax){
    return subtotal+tax
}
// console.log(calculateTotal(30,5))

//object challenges

const car={
    make:"dsfd",
    model:"dsgr",
    year:2022,
    color:["red","blue","pink"],
    drive(){
        console.log("shree")
    },
    stop(){
        console.log("ghosh")
    }
}

// console.log(car.make);
// console.log(car.color[0]);
// car.drive()

// var c=8;
// var d=8;
// if(c=d){
//     console.log("jbl")
// }
// else{
//     console.log('boat')
// }
let value=false;
if(!value){
    // console.log("win")
}

//you have dice in between 1-6

const dice=3;
// switch(dice){
//     case 1:
//         console.log("got 1");
//         break;
//     case 2:
//         console.log("got two");
//         break;  
//     default:
//         console.log("you don't find dice")                      
// }

var person1={
    name:"shree",
    age:19,
    status:"resident"
};
var person2 = {
    name: "ghoshshree",
    age: 23,
    status: "tourist"
}

var num1=0

do{
    // console.log(num1+" increase");
    num1++;
}while(num1<10)

let text="  debasree ghosh";
//get any character or alphabet from string 
// console.log(text.charAt(0))//d
console.log(text.charAt(text.length-1))//last character

//if we want index of any character then we do
console.log(text.indexOf('d'))//0 if the character is not in value it send "-1"
// console.log(text.trim().startsWith('debasree'))
// console.log(text.charAt(0));
// console.log(text.slice(2))

function fullName(firstName,lastName){
    var value=`${firstName} ${lastName}`;
    // console.log(value)
    return value.toUpperCase();
}

console.log(fullName("debasree", "ghosh"))


//refactor then in object parameter
// function fullName({firstName,lastName}){
//     var value=`${firstName} ${lastName}`;
//     return value;
// }
// console.log(fullName({firstName:"shree", lastName:"ghosh"}))

var array1=[1,2,3,4,5];
var array2=[9,8,7,6];
var arr3=array1.concat(array2)


let namearr=['anna','bana']
let title="ghosh";
let newarr=[];
for(var i=0;i<namearr.length;i++){
newarr.push(`${namearr[i]} ${title}`)
}
// console.log(newarr.join(" "))

//important --> 
let numi=1;
let numi2=numi;
numi2=33;
// console.log(`this is my numi2 value ${numi2}`);
//when assinging primitive data type value to a variable any changes are made directly to that value ,without affecting original value

let son={name:'vut'};
let son2=son;
son2.name="tuv"
// console.log(son)
// console.log(son2)
//when assigning non-primitive data type value to a variable is done  by reference  so any changes will affect all the reference

  const parentFun=(name,callbackFun)=>{//higher order function 
    // console.log(`My name is ${name} and ALSO A  ${callbackFun(name)}`)
  }

  const callbackFun=(name)=>{ //callback function 
      return `I am a callback ${name} function `
  }

  parentFun("debasree",callbackFun)

  let objArr=[
    {name:"shree",age:23,position:"developer"},
{ name: "subhoshree", age: 23, position: "Merndeveloper" },
{ name: "Debashree", age: 24, position: "React_developer" },
{ name: "kushu", age: 25, position: "Node.js_developer" }
  ]

  objArr.forEach((el)=>{ //in foreach if we direct write a function then it is a nameless function with a parameter that itirate all over the array 

    // console.log(el.name.toUpperCase())
  })

 const newArr= objArr.map((el)=>{
    // console.log(el.name);
    return el.name
  })
//   console.log(newArr)
//if we not map objArr in newArr then we could not get the new array

  const newFilter=objArr.filter((el)=>{
    return el.age <=23; //if matched the filter then it send the the whole object in a new array
  })
//   console.log(newFilter)

const findFun=objArr.find((el)=>{
    return el.age==23
})
// console.log(findFun)
//find also work like filter but it return only the first value which matched with condition 

const reduceFun=objArr.reduce((acc,curItem)=>{
acc+=curItem.age;
return acc;
},0)//this 0 is acc or total's initial value
// console.log(reduceFun)

let studentArr=[
    
    { id: 1, name: "aaa", score: 55, fvSub: 'math' },
   
    { id: 2, name: "bbb", score: 65, fvSub: 'biology' },
    { id: 3, name: "ccc", score: 98, fvSub: 'history' },
    { id: 4, name: "ddd", score: 88, fvSub: 'geo' },
    { id: 5, name: "fff", score: 69, fvSub: 'eco' },
    { id: 6, name: "ggg", score: 55, fvSub: 'math' },
    { id: 7, name: "jjj", score: 55, fvSub: 'math' },
]
// console.log(studentArr)
const updateStudentArr=studentArr.map((el)=>{
    el.role='student'; //add new key & value in every object
    return el
})
// console.log(updateStudentArr)

const highScore=studentArr.filter((el)=>{
    return el.score>=80
})
// console.log(highScore)

///////////////reduce///////////////////////
const averageScore=studentArr.reduce((acc,curItem)=>{
    acc+=curItem.score;
    return acc;
},0)/studentArr.length;
// console.log(averageScore)

const reduce2=studentArr.reduce((acc,curItem)=>{
const favSub=curItem.fvSub;
if(acc[favSub]){
    acc[favSub]=acc[favSub]+1;
}
else{
    acc[favSub]=1
}
return acc;
},{})
// console.log(reduce2)
////////////////Math object///////////////////////////

const number=4.563;
// let result=Math.floor(number);
// let result = Math.ceil(number);
// let result = Math.max(2, 2, 5, 6, 5, 9, 8);
// let result = Math.min(2,2,5,6,5,9,8);
// let result = Math.PI;
// let result = Math.random();

// console.log(result)

const dayArr = ["sunday", "monday", "wednesday", "thursday", "friday", "saturday"];
const monthArr=["january","february","march","april","may","june","july","august","september","octobar","november","december"]
let dataObject=new Date()
// console.log(dataObject);

const day=new Date('30/3/1999')

const days=day.getDay()
console.log(dayArr[days])

const year=new Date().getFullYear()
console.log(year)

const month=new Date().getMonth();
console.log(monthArr[month])





 



  




