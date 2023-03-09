//IIFE--->immediately invoked function expression ;

//simple approch to avoid global scope pollution ;

//good way to protecting the scope of your function and the variable within it;
susy = 30;
console.log("susy", susy)

const num1 = 20;
const num2 = 30;

// function add(){
//     console.log(`add function ${num1+num2}`)
// }
// add()

// (() => {
//     const num3 = 40;
//     const num4 = 40;
//     console.log(`IIFE function ${num3 + num4}`)
// })()


// (() => {
//     const num5 = 40;
//     const num6 = 50;
//     console.log(`IIFE function ${num5 + num6}`)
// })()

var susy;

//clouser gives you an access to an outer function's scope from inner function and make private variables with clousers

function outer(name, age) {
    let boyos = age + 5
    function inner() {
        console.log(`I am ${name} , my age is ${boyos}`)
    };
    // return inner;
    console.log(boyos)
}

// outer("shree", 20)()
const fun = outer("Subhoshree", 25);
//   console.log(fun)
// fun();

const run = outer("debasree", 15);
// run();


function bank(nam, balance) {
    let initialBalance = balance;
    console.log(`${nam} and ${initialBalance}`)
    function deposit(amount) {
        initialBalance += amount;
        console.log(`${nam} balance is ${initialBalance}`)
    }
    return { deposit: deposit }
}
// bank("shree", 500)()
const shree = bank("shree", 500)

// shree.deposit(500)

const a=()=>{
    console.log("toing");
    return(()=>{
        console.log("toing2");
        return(()=>{
            console.log("toing3")
        })
    })
}

a()
a()()
a()()()