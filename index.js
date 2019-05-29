function cpfValidator(cpf) {
  const checkEqualDigitsAndLength = checkEqualDigits(cpf) && checkLength(cpf);
  const isFirstDigitValid = calculateDigit(cpf, 9) === parseInt(cpf[9]);
  const isSecondDigitValid = calculateDigit(cpf, 10) === parseInt(cpf[10]);
  return (checkEqualDigitsAndLength && isFirstDigitValid && isSecondDigitValid);
}
function checkEqualDigits(cpf) {
  return !arrayNumber(cpf).every((digit) => digit === arrayNumber(cpf)[0]);
}
function checkLength(cpf) {
  return cpf.length === 11;
}
function arrayNumber(cpf) {
  return cpf.split('').map(Number);
}
function calculateDigit(cpf, digitIndex) {
  const sumDigits = multiplyDigits(cpf, digitIndex + 1)
    .slice(0, digitIndex)
    .reduce((accumulator, currentValue) => 
      accumulator + currentValue, 0);
  return sumDigits * 10 % 11 % 10;
}
function multiplyDigits(cpf, mult) {
  return arrayNumber(cpf).map((element, i) => 
    element * (mult - i)
  ); 
}
module.exports.cpfValidator = cpfValidator;