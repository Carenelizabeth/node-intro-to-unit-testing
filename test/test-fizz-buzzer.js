const fizzBuzz = require('../fizzBuzzer.js');
const expect = require('chai').expect;

describe('fizzBuzz', function(){
    it('should return fizz, buzz, fizz-buzz or num if divisible by 3, 5, 15 or none', function(){
        const testNum = [
            {a: 9, expected: 'fizz'},
            {a: 20, expected: 'buzz'},
            {a: 60, expected: 'fizz-buzz'},
            {a: -15, expected: 'fizz-buzz'},
            {a: 7, expected: 7}
        ];
        testNum.forEach(function(input){
            const answer = fizzBuzz(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should give error if args are not numbers', function(){
        const testNotNum = ['spaghetti', 'dinosaur', 'rubber duck'];
        testNotNum.forEach(function(input){
            expect(function(){
                fizzBuzz(input);
            }).to.throw(Error);
        });
    });
});