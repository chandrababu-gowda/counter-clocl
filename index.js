// let hour = document.getElementById("hour");
// let minute = document.getElementById("minute");
// let second = document.getElementById("second");

let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let btn = document.getElementById("submit");



btn.addEventListener('click', ()=>{
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();
    hourValue = parseInt(hour.value);
    minuteValue = parseInt(minute.value);
    secondValue = parseInt(second.value);
    let setHourValue = currentHour + hourValue ;
    let setMinuteValue = currentMinute + minuteValue;
    let setSecondValue = currentSecond + secondValue;

    console.log(currentHour,currentMinute,currentSecond);
    console.log(hourValue,minuteValue,secondValue);
    console.log(setHourValue,setMinuteValue,setSecondValue);



})


















