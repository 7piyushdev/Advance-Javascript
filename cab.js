//Call Method

let Student = {
    name: "Piyush",
    age: 26
}

let printName = function(city,state){
console.log(this.name + " " + "from city " + city + " and state " + state );
}
let arr = ["Chandigarh", "Haryana"]
printName.call(Student)

//Apply method
printName.apply(Student, arr)


//bind method
let printMyName = printName.bind(Student, "solan", "Himachal")
console.log(printMyName);
printMyName()

//Printed the age with bind method using this keyword.

let student1 = {
    age: 20
}

let printAge = function(){
    console.log(this.age)
}

let printMyAge = printAge.bind(student1)
printMyAge()