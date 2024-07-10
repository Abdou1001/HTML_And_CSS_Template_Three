// START ASO Libarry
AOS.init();

    // ===============  START landpage section =================
    
    // START Typed Libarry
const typed = new Typed('#text-tit', {
    strings: ['Welcome, To Dhoom World'],
    typeSpeed: 100,
    backspeed: 150,
    startDelay: 400,
    backDelay: 2000,
    loop: true
});

    // ===============  START Skills section =================
const Skillsection = document.getElementById("Skills")
let progress = document.querySelectorAll(".prog")
let progressPar = document.querySelectorAll(".par")
let iswork = false



    // ===============  START Event section =================
let eventDays = document.querySelector(".Days")
let eventHours = document.querySelector(".Hours")
let eventMinutes = document.querySelector(".Minutes")
let eventSeconds = document.querySelector(".Seconds")

function padNum(num){
    if (num < 10){
        return `0${num}`
    }else{
        return num
    }
}
setInterval(()=>{
    if (eventSeconds.textContent != 0){
        eventSeconds.textContent = padNum(--eventSeconds.textContent)
    }else{
        
        if (eventMinutes.textContent != 0){
            eventSeconds.textContent = 59
            eventMinutes.textContent = padNum(--eventMinutes.textContent)
        }else{
            
            if (eventHours.textContent != 0){
                eventMinutes.textContent = 59
                eventHours.textContent = padNum(--eventHours.textContent)
            }else{
                if (eventDays.textContent != 0){
                    eventHours.textContent = 24
                    eventDays.textContent = padNum(--eventDays.textContent)
                }
            }
        }
    }
},1000)

// ===============  START Stats section =================
let statsSection = document.getElementById("Stats")
let statsNums = document.querySelectorAll("span.num")
let isWork2 = false

window.onscroll = () =>  {
    if(Skillsection.offsetTop - 20 <= window.scrollY){
        let full = 0

        progress.forEach((e, i) => {

            if (!iswork){
                setInterval(()=>{
                    if(full <= e.dataset.prog){
                        e.textContent = `${++full}%`
                        progressPar[i].style.width = `${full}%`
                        iswork = true 
                    }
                },3000 / e.dataset.prog ) 
            }
        
        })
    }

    if (statsSection.offsetTop <= window.scrollY){
        
        if(!isWork2){
            
            statsNums.forEach(ele => {
                let full = +ele.dataset.goal

                let timer = setInterval(_=>{
                    if(full <= +ele.textContent){
                        clearInterval(timer)
                        isWork2 = true
                    }else{
                        ++ele.textContent
                    }
                },3000 / full)

            })
        }
    }
}

