var audio = new Audio('resources/rain.mp3')
audio.volume = .50
audio.loop = true

let volumerange = document.querySelector("#volume")
volumerange.value = 50

const controller = document.querySelector('button')
const icon = document.querySelector('.fa-regular')

document.addEventListener('keyup', (e) => {
    if(e.code === 'Space'){
        controller.classList.toggle('play')
        actionEvent()
    }
})

volumerange.addEventListener("change", () => {
    audio.volume = volumerange.value / 100
})

controller.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('play')
    actionEvent()
})

controller.addEventListener('keyup', (e) => {
    if(e.code === 'Space'){
        controller.classList.toggle('play')
        actionEvent()
    }
})

const actionEvent = () => {
    if(controller.classList.contains('play')){
        audio.play()
        icon.classList.remove('fa-circle-play')
        icon.classList.add('fa-circle-pause')
    }else{
        audio.pause()
        icon.classList.add('fa-circle-play')
        icon.classList.remove('fa-circle-pause')
    }
}