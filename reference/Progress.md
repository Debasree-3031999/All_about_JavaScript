querySelector
addeventlistener

we start variable name with letters,$,_ not with number

js is case sensitive(we have to write the same alphabate for any variable ,i mean console and declear variable spelling should be same)

if we re-assign value in  const it give error(assingment to constant variable)

//implicit type conversion
//params and argument

in annonymus function variable hold the expression of the function 

//object value if a function then its called method

object
conditional statement
equality
logical operator(|| ,&&)
switch case
do-while
tempate Literals - ES6+
concat array(arrayname.concat(another array name))

ternary operator(condition ? run value if it is true : runs value if it is  false)

we can modify global scope by creating  inner function

//function are first class object -because store in a variable (or expression), passed as an argument to another function ,and return  fron the function , 

//Higher Order function -accepts another function as an argument or returns another function as a result;

callback Function -passed to a another function as an argument and executed inside that function 

forEach

map //map can returns a new array, it does not change the size of original array and  it use values from original array when making new one

filter
find

reduce(iterates,call back function, reduce always return a single value it can be number or array or object, reduce function take 2 parameter they are "acc"(total of all calculative))//we use number and object return reduce method in app.js

//Math object(floor,ceil,sqrt,PI,min,max,random)
//Data object
//window object=browser api 
//getElementById
//getElementByTagName() this help us to invok any of tag by selecting like array indexing
//querySelector
//nextSibiling(in html whatever element we select by document.queryselector if we want to access its next element like in a unorder list next li then we can do nextElementSibiling or nextSibiling.nextSibiling(because first nextSibiling denote text) it same as previousSibiling or previousElementSibiling)

//textContent(textcontent help us to read or print the html content what is showing in browser in this mentioning id or class)
//innerHtml(innerHtml help us to get total chtml body)
//getAttribute
//setAttribute
 //createElement('element');
 //createTextNode('text content)
 //element.appendChild(childElement)
 //prepend(use prepend for anything adding  
 in html page that showing in browser)
 //remove(we can select a element using a variable then we simply do .remove())

 //currentTarget
//target

 //Event

 //addeventlistner(event==click/mouseup/mousedown)//they all work same

 //addeventlistenr(event==mouseenter/mouseleave)//both help us to give a hover effect in particular element and remove it by hovering

 // "keypress" event = when key is pressed
 //"keydown" event =when key is down (you have to only type a key in input box it will be start counting)
**//"keyup" event= when key is realeased (we can used it for get the value in input box what we type)

//form
//localStorage.setItem(key,JSON.stringify(value) )
JSON.parse(localStorage.getItem(key))
localStorage.removeItem(key) ,
localStorage.clear();
// same for,sessionStorage as well

//setTimeout
//setInterval - runs function repeatedly, at specific intervals
//clearInterval

//the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed ,without waiting for stylesheet images to finish loading 

       //the load event is fired when the whole page has loaded ,including all dependent resources such as stylesheet and images. 

 scroll Event - on element or document

 window.addEventListener('scroll',function(){
    console.log(window.scrollY + "px")//vertical axis;

    console.log(window.scrollX + "px")//horizontal axis
 })   

 //we can know browser screen height width by consoling (window.innerHeight),(window.innerWidth)   

 //resize event fires when the document view(window) has been resized
 //syntax--> window.addEventListener('resize",function(){
    console.log(window.innerWidth)
 })

//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading

//data-id(using for filter)

//object 3rd video(nested object, set variable as property value)

//constructor function

//useparams is used for taking any parameter from url (let{id}=useParams())


//MONGODB--->(database-->cluster-->collections-->documents)



