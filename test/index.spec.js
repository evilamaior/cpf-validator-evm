const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');

describe('cpfValidator()', () => {
    it('false to equal digits', () => {
        expect(validator.cpfValidator('00000000000')).to.equal(false);
    });

    it('false to more than 11 digits', () => {
        expect(validator.cpfValidator('123456789011')).to.equal(false);
    });

    it('false to less than 11 digits', () => {
        expect(validator.cpfValidator('123456789')).to.equal(false);
    });

    it('false to letters', () => {
        expect(validator.cpfValidator('abcdefghijk')).to.equal(false);
    });

    it('false to special characters', () => {
        expect(validator.cpfValidator('618.150.178-99')).to.equal(false);
    });

    it('True valid CPF', () => {
        expect(validator.cpfValidator('31661732852')).to.equal(true);
    });
})