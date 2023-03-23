//settimeout is not a javascript thing it is a browser thing 



// callbackfun(0 )
// console.log("after function run")

// function callbackfun(time){
//     console.log("function first log")
//     setTimeout(()=>{
// console.log("callback function log")
//     },time)
// }

//DOM example--->
// const head1=document.querySelector(".one");
// const head2 = document.querySelector(".two");
// const head3 = document.querySelector(".three");
// const btn = document.querySelector(".btn");
// const url='https://source.unsplash.com/random';
// const container=document.querySelector('.img-container')

// btn.addEventListener('click',()=>{loadImage(url).then((data)=>{container.appendChild(data)}).catch((err)=>console.log(err))
// });

// function loadImage(url){
//     const promise= new Promise((resolve,reject)=>{
//         let img=new Image();
//         img.addEventListener('load',()=>{
//             resolve(img)
//         });
//         img.addEventListener('error',()=>{
//             reject(new Error('failed to load img'))
//         });
//         img.src=url
//     })
//     return promise;
// }

// btn.addEventListener('click',()=>{
//     // console.log("after click")
//     setTimeout(()=>{
//         head1.style.color='red';
//         setTimeout(() => {
//             head2.style.color = 'green';
//             setTimeout(() => {
//                 head3.style.color = 'orange'
//             }, 1000)
//         }, 2000)
//     },3000)  
// }); //this is call call back hell

//we can do the same thing using promise 
// btn.addEventListener('click',()=>{
//     addColor(1000,head1,'red').then(()=>addColor(2000,head2,'green')).then(()=>addColor(3000,head3,'blue'))

// });

// const addColor=(time,element,color)=>{
// return new Promise((resolve,reject)=>{
// if(element){
//     setTimeout(()=>{
//         element.style.color=color;
//     },time);
//     resolve();
// }
// else{
//     reject(`there is no such element ${element}`)
// }
// })
// }

// console.log("below click")

// setTimeout(()=>{
//     console.log("a")
// },3000)
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000*i) 
// }

// let c=0
// for(let i=0;i<100000;i++){
//     c++;
    
// }
// console.log("b")

//promises-------->
//in promise we create a constructor (new Promise) then we create a call back function and in this call back function we again send 2 function ,yes we again send 2 function as parameter (resolved,reject)

// const promise=new Promise((res,rej)=>{
// let value=true;
// if(!value){
//     res("it is resolved")
// }
// else{
//     rej("it is rejected")

// }
// }) .then((res)=>{
//     return res.json()
// }).then((data) => {
//     console.log(data, "jhuig")
// }).catch((err)=>{
//     console.log(err,"kjg")
//  })
 
// console.log(promise)

// console.log('hello everyone')
// for(let i=0;i<000;i++){
// console.log("first for-loop")
// }
// setTimeout(()=>{
//     console.log("1st set-timeout")
// },0);
// console.log('after 1st set timeout run')

// for(let i=0;i<100;i++){
//     setTimeout(() => {
//         console.log("2nd in loop set-timeout")
//     }, 0);
// }

