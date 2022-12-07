//function currying using bind method

let multiply = function(x,y){
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(9)

//function currying using closures

let sum = function(x){
    return function (y){
console.log(x + y)
    }
}

let sumOfTwoNum = sum(4)
sumOfTwoNum(10) 