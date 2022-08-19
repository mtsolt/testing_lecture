function multiplyBy3(num) {
    return num * 3
}

function addition(num1, num2){
    return num1 + num2
}

function oddOrEven(num) {
    if (num % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}


module.exports = {
    multiplyBy3: multiplyBy3,
    addition: addition
}
