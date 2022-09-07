const result = document.getElementById('datecalc__result')
const outTime = document.getElementById("out");

export const printError = (errorText) => {
  result.innerText = errorText
}
export const printErrorTime = (errorText) => {
  outTime.innerText = errorText;
};
export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
} 
