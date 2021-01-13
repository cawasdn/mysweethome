const readmore = document.querySelector(".btn")
const para = document.querySelector(".content-container p")
const messageshow = document.querySelector(".message-show")
const btnexit = document.querySelector('.btn-exit')
const btnexitshow = document.querySelector('.btn-exit-show')
const video = document.querySelector('.showcase .video-container video')

readmore.addEventListener('click', function(){
    
    readmore.style = "display: none"

    para.style = "display: none"

    messageshow.style = "display: flex"

    btnexit.className = 'btn-exit-show'

    video.load()
    video.play()
})