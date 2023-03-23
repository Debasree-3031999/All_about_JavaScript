 //VAR
//define(var num=10)
//update(num=20)
//redifine(var num="shree") .....all things can happen using var

//using LET we can define and update a variable but we can't redifine or redeclear the variable

//CONST can't mutate primitive type or we can't reassing value in primitive type but we can reassign value in non-primitive or in object
//ex------->
const count=30;
// count=40; cannot reassign in primitive data type
// console.log(count)

const man={name:"pranjal"}
man.name="tanishq"; //in non-primitive we can reassign the value using const 
// console.log(man.name)

total=10;
var test=true;

if(test){
    let total=1000;//let only change value in block scope
    // console.log("in if scope", total)
}
// console.log(total)// not here as well

//Template String
const name="shree";
const age=12;
// const location="kolkata";

// const template=`My name is ${name.toUpperCase()} & age is ${age*2} & location is ${location.toUpperCase()}`

// console.log(template)

//template HTML

// const person={
//     name:"shree",
//     age:12,
//     location: ["kolkata","delhi","ajmir","manali"],
// }

// let result=document.querySelector(".result");

// result.innerHTML=`<h2>${person.name.toUpperCase()}</h2>
// <p>${person.age*2}</p>
// <ul>${person.location.map(el=>{
//     return `<li>${el}</li>`
// }).join("")}`


//Arrays Destructuring 
const circle = ["sini", "ana", "tan", "olaf"]

const[one,two,three,four]=circle;
console.log(one,two,three,four) //it print all the array element indexically 
//if we want to skip element then we simpply put a "," for them which element we want to skip
 const [fst,,third]=circle;
// console.log(fst,third)

//swaping variable using destructuring

let first="shree";//it can't be happen using const
let second ="tan";

[second,first]=[first,second]

// console.log(first,second)

//Object destructuring

// const person={
//     nam:"shree",
//     agee:12,
//     location: { onee: "kolkata" ,
// twoo:"delhi",
// three:"ajmir"} 
// }

// const {nam,agee,location:{onee,twoo}}=person;
// console.log(nam,agee,onee,twoo) //u can directly access by using the same property name

// const { nam: mynam, agee: boyos, location: { onee:prothom, twoo:ditiyo } } = person;
// console.log(mynam, boyos,prothom,ditiyo)  //or u can access it by declear new nam

// function printPerson(bob){
// console.log(bob.nam)
// }
// printPerson(person)

//we can destrucuring in direct parameter

function printPerson({nam,agee,location:{onee}}){
    // console.log(nam,agee,onee)
}
// printPerson(person)//***all over use */


//New String Method
//startsWith(), endsWith(), includes(), repeat() -->all are case sensitive

const larka="pranjal bhasker tanishq kashyap";
const women="debu debasree shree ghosh";

console.log(larka.startsWith('p'))//startsWith 
console.log(larka.endsWith('h'))//endsWith 
console.log(women.endsWith('h'))//endsWith 

console.log(larka.includes('h'))//includes 
 
const onekLarka=(larka,howmuch)=>larka.repeat(howmuch);//create a function and set 2 parameters 1. which variable you want to repeat and 2. how many time u want to repeat  
const printOneklarka=onekLarka(larka,10);
// console.log(printOneklarka)


//SPREAD OPERATOR-->split into single item and copy then

let spread="spread";
// console.log(...spread)

let boys=["aaa","bbb","ccc"];
let girls=["fff","eee","ggg"];

let mixedArray=[...boys,...girls]
// console.log(mixedArray)

// let newmixarr=mixedArray;
// newmixarr[0]="shree";

// console.log(mixedArray)
// console.log(newmixarr)

 //then it will be change both variable (newmixarr & mixarray) cause both reference the same place of the memory;

 //but if we write like this
 let newmixarry=[...mixedArray];//new mixedarray
newmixarry[0] = "shree";
// console.log(mixedArray) //old mixedarray
// console.log(newmixarry)

//where we mention spread operator it just copy then and create newly

let spreadobj={name:"shreemoti",age:24}
let newspreadobj={...spreadobj,city:"kolkata",name:"kelvin"}
// console.log(newspreadobj)
// console.log(spreadobj)

var number=[12,34,54,65,78,98,89,66,333,5468,45456,2323,66]

// console.log(Math.max(number)) //Math.max only compare individual number not array element so we use spread oparator cause it split item and copy them

// console.log(Math.max(...number))


//spread operator use as function argument

let funarr=["shree","ghosh"];
const hello=(name,sirname)=>{
    // console.log(name , sirname)
}
// hello(funarr);
// hello(...funarr)




//REST OPERATOR  (IT HEPLS TO GIVE the rest thing eksath)

let fff=[1,2,3,4,5,6,7,8,9];
let[pehela,...rest]=fff;
// console.log(pehela,rest.join(" "))//so this "...rest" gives you rest of the things combined in a array

let ooo={name:"jan",boyos:1,city:"calender"}
let{boyos,...obj}=ooo;
// console.log(boyos,obj) //see it gives again rest of the things




//Array.from & Array.of -they are not in the prototype;

//Array.of creates a new array instance from a variable number of arguments
let ofarray=Array.of("many","15",true)

// console.log(ofarray)


//filter return a array but find return a single item

let manush=[
{id:1,name:"shree"},
{ id: 2, name: "maw" },
{ id: 3, name: "mawmaw" }
];



let finFun=manush.find(e=>e.name==="shree")
console.log(finFun)//it will give u the normal array element ({ id: 1, name: 'shree' })
 console.log(finFun.name)

let filFun = manush.filter(e => e.name === "shree")
console.log(filFun)  //it will give u an array ans ([ { id: 1, name: 'shree' } ])

 var grade=["A","B","C","d","g","F"]
var trade=["a","a","a"]
 const checkSome=grade.some(el=>el=="A");
 console.log(checkSome)//true

const checkEvery = trade.every(el => el == "a");
console.log(checkEvery,"trade")//true

// for(let x of grade){
//     console.log(x)
// }

//three method to convert object into array

const insan = {
    nam: "shree",
    agee: 12,
    location: {
        onee: "kolkata",
        twoo: "delhi",
        three: "ajmir"
    }
}

//Object.keys( - converts property name into array)
console.log(Object.keys(insan))

//Object.values( - converts property values into array)
console.log(Object.values(insan))

//Object.entries( - converts both into array)
console.log(Object.entries(insan))

//Set object =- store a collection of unique values of any type

let unique=new Set()

unique.add("one");
unique.add(44);
unique.add(true);
// unique.clear()//remove all the iten which were save in an array

let checkhas=unique.has(44);
// console.log(checkhas)
console.log(unique)

//array includes() - checks if the iten is in array
//useful in the conditional statement
let includArr=["maw","mawmaw","kushu"]

// console.log(includArr.includes("maw"))

if(includArr.includes("maw")){
    console.log(`yes it is on the list`)
}
else{
    console.log(`No it is not on the list`)

}










