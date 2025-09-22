var imgList = Array.from(document.querySelectorAll(".item img"))
var modalBox = document.querySelector('#boxModal')
var modalBg = document.querySelector('.innerBox')

var closeElement = document.querySelector('#close')
var prevElement = document.getElementById("prev")
var nextElement = document.getElementById("next")
var currentIdx = 0;


var newArr = []
for(var i = 0; i < imgList.length; i++){
    newArr.push(imgList[i])
}

for(var i = 0; i < imgList.length; i++){
    imgList[i].addEventListener('click', function(e){
        modalBox.style.display = 'flex'
        var modalImg = e.target.getAttribute('src')
        modalBg.style.backgroundImage = 'url('+modalImg+')'
        currentIdx = imgList.indexOf(e.target)
        
    })
}
nextElement.addEventListener('click', nextSlide)
function nextSlide(){
    ++currentIdx
    if(currentIdx == imgList.length){
        currentIdx = 0
    }
    var imgSrc = imgList[currentIdx].getAttribute('src')
    modalBg.style.backgroundImage = 'url('+imgSrc+')'

}

prevElement.addEventListener('click', prevSlide)
function prevSlide(){
    --currentIdx
    if(currentIdx == -1){
        currentIdx = imgList.length-1
    }
    var imgSrc = imgList[currentIdx].getAttribute('src')
    modalBg.style.backgroundImage = 'url('+imgSrc+')'

}

closeElement.addEventListener('click', closeModal)
function closeModal(){
    modalBox.style.display = 'none'
}

document.addEventListener('keyup', function(e){
    if(e.code == 'ArrowRight')
        nextSlide()
    else if(e.code == 'ArrowLeft')
        prevSlide()
    else if(e.code == 'Escape')
        closeModal()
})

boxModal.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.getAttribute('id') == 'boxModal')
        closeModal()
})