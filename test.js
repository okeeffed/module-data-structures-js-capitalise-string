const lib = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
describe('check lowercase of two strings are anagrams', function () {
    it('should handle basic anagram', function () {
        const res = lib.capitaliseStr('race car! mun');
        expect(res)
            .to
            .equal('Race Car! Mun');
    });
});