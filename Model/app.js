let clickBtn=document.querySelector('.click-btn');
let modelOverlap = document.querySelector('.model-overlap')
let closeBtn = document.querySelector('.close-btn')

clickBtn.addEventListener("click",function(){
    modelOverlap.classList.add('open-model')
})

closeBtn.addEventListener("click",function(){
    modelOverlap.classList.remove('open-model')
})