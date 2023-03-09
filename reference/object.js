
let name="debasree"
const person=[{

    name:"shree",
    age:24,
    married:false,
    siblings:["di","fi","chi","mi"],
    greet:function(name){
        console.log(name)
    },
    sayHello(name){
        console.log(name)
    },
    job:{
        title:'developer',
        company:{
            name:'coding',
            address:"123 haridas road",

        }
    }

}]
// console.log(person.job.name="fd")
console.time()
for(const x of person){
    
    // console.log(x)
} //for of using for array
console.timeEnd()

console.time()
for(const y in person){
    // console.log(y, ":", person[0])
}//for in loop use for object
console.timeEnd()


//A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.in constructor function we create new obj and omit the return;

function ConstructorObj(name,tech,age){
    this.name=name;
    this.tech=tech;
    this.age=age;
    // return this;
}

let consFun1=new ConstructorObj("shree","react",24)
let susy = new consFun1.constructor("Debashree", "node", 24);//we can use constructor function for our same intence object call
// console.log("susy print",susy)
let consFun2 = new ConstructorObj("Debashree", "node", 24)

let consFun3 = new ConstructorObj("Subhoshree", "angular", 25)

let consFun4 = new ConstructorObj("Tanshree", "redis", 24)

consFun1.newKey="value"
delete consFun1.age  
// console.log(consFun1)

// console.log(consFun2)

// console.log(consFun3)

// console.log(consFun4)

const shree={
    name:'shrimoti',
    sirname:"ghosh",
    fullname:function (){
        // console.log(this)
        // console.log(`my name is ${this.name} ${this.sirname}`);
    },
}
shree.name="annapurna"
shree.fullname() //this help us to change object value dynamically
// console.log(shree)

//factorial function 

function factorFun(firstName,lastName){
    return{
        fName: firstName,
        sName: lastName,
        fullname: function () {
            // console.log(`my name is ${this.fName} ${this.sName}`)

        }
    }
    
}

// console.log(factorFun())
// factorFun()
const obj=factorFun("shree","ghosh")
obj.fullname();
// console.log(obj.fName)

