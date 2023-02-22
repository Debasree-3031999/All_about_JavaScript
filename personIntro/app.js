const info=[
    {
        id:1,
        name:"modhu",
        work:"web developer",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAmJ10B9Qhhl70Hefu8tQVmYXHH_8CeXQJX00MIA&s',
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet inventore, alias ratione quos cum, optio quia beatae eaque laborum assumenda illum, corporis repellat asperiores officiis nostrum tenetur rerum animi!z"
    },

    {
        id: 2,
        name: "sudhu",
        work: "web developer",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bg0Ee8MidAW93T5UBewgqpfJESkBqRtpu-3wdZ0M4wlRjaFMka5dMAJz-P-M4VY8K-0&usqp=CAU',
        about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet inventore, alias ratione quos cum, optio quia beatae eaque laborum assumenda illum, corporis repellat asperiores officiis nostrum tenetur rerum animi!z"
    },
    {
        id: 3,
        name: "dudu",
        work: "web developer",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6CjuntQfKVq9QD-c-7YIAPibROZ5gFLFcZTLZQDJDlH89qZ8C8swGI-tLyukSvjnjjI&usqp=CAU',
        about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet inventore, alias ratione quos cum, optio quia beatae eaque laborum assumenda illum, corporis repellat asperiores officiis nostrum tenetur rerum animi!z"
    }
]

let img=document.querySelector('.img');
let name = document.querySelector('.name')
let work = document.querySelector('.work')
let about = document.querySelector('.about')

let forward=document.querySelector('#forward');
let backward=document.querySelector("#backward");
let random=document.querySelector('.random')

//set starting item
let item=0;

window.addEventListener("DOMContentLoaded", function(){
    showme(item)
})

function showme(){
    let test = info[item]
    img.src = test.img
    name.textContent = "Name - " + test.name;
    work.textContent = "proffesion - " + test.work
    about.textContent = "About - " + test.about
    console.log('hello', item)
} 

forward.addEventListener("click",function(){
    item++;
    if(item>info.length-1)(
        item=0
    )
    showme()
})

backward.addEventListener("click", function () {
    item--;
    if (item <0) (
        item = info.length-1
    )
    showme()
})

random.addEventListener("click",function(){
    item=Math.floor(Math.random()*info.length)
    console.log(item)
    showme()
})