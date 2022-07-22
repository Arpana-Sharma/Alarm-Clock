const btn = document.querySelector("#set-alarm");
const alarmHr = document.getElementById("hrsel");
const alarmMin = document.getElementById("minsel");
const alarmAP = document.getElementById("ampmsel");
const ofBtn = document.querySelector("#ofAlarm");
var listAud = [];

function apto24() {
    if (alarmAP.selectedIndex == 2) {
        return parseInt(alarmHr.selectedIndex) + 12;
    }
    else {
        return parseInt(alarmHr.selectedIndex);
    }
}
setInterval(function () {
    let date = new Date();
    let x = date.getHours() % 12;
    if (x == 0) {
        x = 12;
    }
    document.getElementById("hours").innerHTML = `${Math.floor(x / 10)}${x % 10}: `;
    document.getElementById("minutes").innerHTML = `${Math.floor(date.getMinutes() / 10)}${date.getMinutes() % 10}: `;
    document.getElementById("seconds").innerHTML = `${Math.floor(date.getSeconds() / 10)}${date.getSeconds() % 10} `
    document.getElementById("ampm").innerHTML = date.getHours() >= 12 ? 'PM' : 'AM';
}, 1000);

ofBtn.addEventListener("click",function(){
    listAud.forEach(element => {
        element.pause();
    });
});

btn.addEventListener("click", function () {
    let myInterval = setInterval(function () {
        let date = new Date();
        if((alarmMin.selectedIndex == 0) || (alarmHr.selectedIndex == 0)){
            alert("Select Correct Time");
            clearInterval(myInterval);
        }
        if ((date.getSeconds() == 0) && (date.getMinutes() == parseInt(alarmMin.selectedIndex - 1)) && (date.getHours() == apto24())) {
            console.log("ALARM-RANG");
            var audio = new Audio('Clock-sound-effect.mp3');
            audio.play();
            audio.loop = true;
            listAud.push(audio);
            clearInterval(myInterval);
        }
    }, 1000);
});