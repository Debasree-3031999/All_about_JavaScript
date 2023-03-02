let arr = [
    {
        age: "25",
        designation: "employee",
        name: "Pranjal bhaskar ",
        priority: "high",
        vaccine: "Covishield",
        uniqueId: "1236"
    },
    {
        age: "23",
        designation: "employee",
        name: "Pranjal bhaskar ",
        priority: "high",
        vaccine: "Covishield",
        uniqueId: "1234"
    },
    {
        age: "28",
        designation: "employee",
        name: "Pranjal bhaskar ",
        priority: "high",
        vaccine: "Covishield",
        uniqueId: "1235"
    },
   
    {
        age: "26",
        designation: "employee",
        name: "Pranjal bhaskar ",
        priority: "high",
        vaccine: "Covishield",
        uniqueId: "1237"
    },
    {
        age: "27",
        designation: "employee",
        name: "Pranjal bhaskar ",
        priority: "high",
        vaccine: "Covishield",
        uniqueId:"1238"
    },
]
// delete the object with uid 1236
var newarr = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i].uniqueId!=1236){
//         newarr.push(arr[i])
//     }
// }

let arrr=[1,2,7,4,5]//remove 7 
// console.log(arrr.slice())

// for(var i=0;i<arrr.length;i++){
//     if(arrr[i]!=arrr[2]){
//         newarr.push(arrr[i])
        
//     }
// }
// console.log(newarr)

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(1000,9999))

for (let i = 0; i < arr.length; i++) {
    if (arr[i].uniqueId == 1235) {
        arr[i].otp=3456;
        // console.log(arr[i])
       
    }
}

let arr1=[...arr.sort((a,b)=>(parseInt(a.age)-parseInt(b.age)))];

console.log(arr1)