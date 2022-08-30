 const dateDiff = document.getElementById('dateDiff');
 const timer = document.getElementById('timer');
 const displayDate = document.querySelector(".display-date");
 const displayTime = document.querySelector(".display-timer");
 
export { dateDiff, timer };
export const hide = function (event) {
    let target = event.target;
    if (target.dataset.action == "dateDiff") {
      displayDate.classList.toggle("visible");
      displayTime.classList.remove("visible");
    } if (target.dataset.action == "timer") {
      displayTime.classList.toggle("visible");
      displayDate.classList.remove("visible");
    }
    
}
