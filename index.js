function arrayNumber (cpf) {
  return cpf.split('').map(Number);
}
function checkEqualDigits (cpf) {
  return !(cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222' || cpf === '33333333333' || cpf === '44444444444' || cpf === '55555555555' || cpf === '66666666666' || cpf === '77777777777' || cpf === '88888888888' || cpf === '99999999999');
}
function multiplyDigits (cpf, mult) {
  return arrayNumber(cpf).map((element, i) => {
    let multiplier = mult - i;
    return element * multiplier;
  });
}
function checkLength (cpf) {
  return cpf.length === 11;
}
function calculateFirstDigit (cpf) {
  const sumDigits = multiplyDigits(cpf, 10).slice(0, 9).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sumDigits * 10 % 11 % 10;
}
function calculateSecondDigit (cpf) {
  const sumDigits = multiplyDigits(cpf, 11).slice(0, 10).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sumDigits * 10 % 11 % 10;
}
function cpfValidator (cpf) {
  return (calculateFirstDigit(cpf) === parseInt(cpf[9]) && calculateSecondDigit(cpf) === parseInt(cpf[10]) && checkEqualDigits(cpf) && checkLength(cpf));
}
module.exports.cpfValidator = cpfValidator;