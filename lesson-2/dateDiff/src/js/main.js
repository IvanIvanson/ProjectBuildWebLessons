import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import {hide} from './switch.js'
import { dateDiff, timer } from './switch.js'
import { btnStart,  initializeClock} from "./timer.js";
import "style-loader!css-loader!../style/style.css";


const form = document.getElementById('datecalc');

dateDiff.addEventListener("click", hide);
timer.addEventListener("click", hide);

btnStart.addEventListener("click", function () {
  initializeClock()
});

form.onsubmit = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const firstInput = formData.get('firstDate')
  const secondInput = formData.get('secondDate')

  const dateDiff = getDateDiff(firstInput, secondInput)

  if (!firstInput || !secondInput) {
    printError('Oooppppsss - Введите дату!!!!')
  } else {
    printResult(dateDiff)
  }
}