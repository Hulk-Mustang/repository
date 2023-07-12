const text = document.getElementById('text')
const pen = document.getElementById('pen')
const result = document.getElementById('allIt')
const btn = document.getElementById('btn')
const total = document.getElementById('num')
const output = document.getElementById('time')
const time = document.getElementById('time')
const date = document.getElementById('time')
let i = 0
let format = 'time'


    text.addEventListener('keydown', function(event){
        if (event.key == 'Enter') {
            if (text.value === '') {
                return
            }else if(text.value === ' ')(text.value)
            else {
                createDeleteElements(text.value)
            }
        }
    })

btn.addEventListener('click', (e) => {
    if(text.value === '')return
    createDeleteElements(text.value)
    text.value = ''
})

pen.addEventListener('click', (e) => {
    result.textContent = ''
    minus()
})


function minus() {
    i = 0
    total.textContent = 0
    text.value = ''
}
                                      

function createDeleteElements(value) {
text.value = ''
i++

    const h2 = document.createElement('h2')
    const button = document.createElement('button')

    h2.className = 'now'
    h2.textContent = value


    button.className = 'button'
    button.textContent = 'delete'                                                               
    h2.appendChild(button)                                                               
                                                               
button.addEventListener('click', e => {                                                               
    result.removeChild(h2)                                                               
    i--                                                               
total.textContent = i                                                               
                                                               
})                                                               
                                                               
h2.addEventListener('click', (e) => {                                                               
    h2.classList.toggle('active')                                                               
    button.classList.toggle('akk')                                                               
})                                                               
                                                               
total.textContent = i                                                               
                                                               
    result.appendChild(h2)                                                               
}             


time.onclick = function() {
    format = 'time'
    update()
}
date.onclick = function() {
    format = 'date'
    update()
}

setInterval(() => {
    update()
},1000)

function update() {
    output.textContent = mode(format)
}

function mode(moderator) {
    const now = new Date()
    switch(moderator){
        case 'time' : 
        return now.toLocaleTimeString()
        case 'date' : 
        return  now.toLocaleDateString()
            default:
                return now.toLocaleTimeString()
    }
}

console.log('All good no errors!')