function arrayNumber(cpf) {
    return cpf.split('').map(Number);
}

function multiplyDigits(cpf, mult) {
    return arrayNumber(cpf).map((element, i) => {
        let multiplier = mult - i;
        return element * multiplier;
    });
}

function calculateFirstDigit(cpf) {
    const sumDigits = multiplyDigits(cpf, 10).slice(0, 9).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    return sumDigits * 10 % 11 % 10;
}

function calculateSecondDigit(cpf) {
    const sumDigits = multiplyDigits(cpf, 11).slice(0, 10).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    return sumDigits * 10 % 11 % 10
}

function cpfValidator(cpf) {
    return (calculateFirstDigit(cpf) === parseInt(cpf[9]) && calculateSecondDigit(cpf) === parseInt(cpf[10]))
}
console.log(cpfValidator('11111111111'))
module.exports.cpfValidator = cpfValidator;