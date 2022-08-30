import { playStart } from "./sound.js";
import { playStop } from "./sound.js";
import { printErrorTime} from "./printResult.js";


const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById("btn-stop");
export { btnStart, btnStop };
    
   
let out = document.getElementById('out');    


// --------
function getTime(endtime) {
    
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000/60) % 60);
    let hours = Math.floor(t / (1000*60*60) % 24);
    let days = Math.floor(t /(1000*60*60*24));
    
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}


export const initializeClock = function (event) {
  // -----
  const firstInput = document.getElementById("firstDate");
  let date = firstInput.value;
  // -----
  playStart();
  let clock = document.getElementById("out");
  let timeinterval = setInterval(function () {
    let t = getTime(date);
      clock.innerText = `Осталось: days: ${t.days}, hours: ${t.hours}, minutes: ${t.minutes}, seconds: ${t.seconds}`;
      if (!date) {
        printErrorTime("Oooppppsss - Введите дату!!!!");
      }
    if (t.days==0 && t.hours==0 && t.minutes==0 && t.seconds == 0) {
        clearInterval(timeinterval);
        playStop();
    }
      function clear() {
          clearInterval(timeinterval);
          playStop();
      }
       btnStop.addEventListener("click", clear);
  }, 1000);
   
};