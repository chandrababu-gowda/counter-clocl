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

    for(i=0;i>=0;i++) {
        let newDate = new Date();
        let newCurrentHour = newDate.getHours();
        let newCurrentMinute = newDate.getMinutes();
        let newCurrentSecond = newDate.getSeconds();
        let conditionCheck = newCurrentHour==setHourValue&&newCurrentMinute==setMinuteValue&&newCurrentSecond==setSecondValue
        if(conditionCheck){
            alert("Time's up!")
            break;
        }

    }

})


















