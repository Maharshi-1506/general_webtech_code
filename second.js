let day;
const a = new Date().getHours();

if (a < 10) {
    day = "GOOD MORNING , HAVE A MUG OF COFFEE !!!";
    document.getElementById("mahi").innerHTML = day;
} else if (a < 20) {
    day = "GOOD DAY , MAKE YOUR DAY PRODUCTIVE !!!";
    document.getElementById("mahi").innerHTML = day;
} else {
    day = "GOOD NIGHT , YOUR BOY NEED REST WELL DONE !!!";
    document.getElementById("mahi").innerHTML = day;
}
function updateTime(){
let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
document.getElementById("mahi1").innerHTML = `Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
}
// Initial call to set the time immediately
updateTime();

setInterval(updateTime, 1000);