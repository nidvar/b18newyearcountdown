const current_date = new Date()
const destination_date = new Date('Jan 01 2'+1)

const time_difference = destination_date - current_date
const days = time_difference/1000/60/60/24
const hours = (days - Math.floor(days)) * 24
const minutes = (hours-Math.floor(hours))*60
const seconds = (minutes - Math.floor(minutes))*60


const full_day = Math.floor(days)
const full_hour = Math.floor(hours)
const full_minutes = Math.floor(minutes)
const full_seconds = Math.floor(seconds)
console.log(full_day, full_hour, full_minutes,full_seconds)

document.querySelector('.days').innerHTML = full_day
document.querySelector('.hours').innerHTML = full_hour
document.querySelector('.minutes').innerHTML = full_minutes
document.querySelector('.seconds').innerHTML = full_seconds

const run=()=>{
    setInterval(()=>{
        const current_date = new Date()
        const destination_date = new Date('Jan 01 2'+1)

        const time_difference = destination_date - current_date
        const days = time_difference/1000/60/60/24
        const hours = (days - Math.floor(days)) * 24
        const minutes = (hours-Math.floor(hours))*60
        const seconds = (minutes - Math.floor(minutes))*60


        const full_day = Math.floor(days)
        const full_hour = Math.floor(hours)
        const full_minutes = Math.floor(minutes)
        const full_seconds = Math.floor(seconds)

        document.querySelector('.days').innerHTML = full_day
        document.querySelector('.hours').innerHTML = full_hour>10?full_hour:'0'+full_hour
        document.querySelector('.minutes').innerHTML = full_minutes>10?full_minutes:'0'+full_minutes
        document.querySelector('.seconds').innerHTML = full_seconds>10?full_seconds:'0'+full_seconds
    }, 1000)
}

run();