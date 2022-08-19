const calculatorFunctions = require('./calculatorFunctions')


describe('Testing suite for my calculator', () => {
    test('Testing that the test actually works', () => {
        expect(5+2).toEqual(7)
    })

    describe('multiplyBy3', () => {
        let multiplyBy3 = calculatorFunctions.multiplyBy3

        test('it exists', () => {
            expect(multiplyBy3).toBeDefined()
        })

        test('takes an argument, and returns the value multiplied by 3', () => {
            expect(multiplyBy3(5)).toEqual(15)
        })

    })

    describe('addition', () => {
        let addition = calculatorFunctions.addition
        
        test('it exists', () => {
            expect(addition).toBeDefined()
        })

        test('takes two parameters and adds them together', () => {
            expect(addition(8,3)).toEqual(11)
        })
    })



})


