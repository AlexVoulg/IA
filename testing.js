let input = [ 1, 2, 3, 4, 5 ];
// [ 1, 4, 9, 16, 25 ]
let output = [];
// output.push("kati");

// console.log(Math.pow(num, 2))

for (let i = 0; i < input.length; i++){
    output.push(Math.pow(input[i],2));
}

function square(num){
    return Math.pow(num, 2);
}
//map, filter, foreach
// const input = [ 1, 2, 3, 4, 5 ];

// output = input.map(square) //mapping with named function
output = input.map(function(arithmos){
    return Math.pow(arithmos, 2);
})


output = input.map(arithmos => Math.pow(arithmos, 2))


input = [10, 20, 30]
// console.log(biggerThan10)

input = ["Facebook", "Amazon", "Apple", "Netflix", "Google"]
//"F","A" , "A", "N", "G"


const faang = input.map(word => word[0]).join("")
// console.log(faang)

//Multiple mapping
input = [ 1, 2, 3, 4, 5 ];
output = input
    .map(arithmos => Math.pow(arithmos, 2))
    .map(arithmos => Math.pow(arithmos, 2))
console.log(output)


//filter
input = [ 1, 2, 3, 4, 5 ];
// function biggerTwoFive(num){
//     return num > 2.5
// }
// for (let i in input){
//     if (biggerTwoFive(i))
//         out.push(i)
// }
output = input.filter(num => num > 2.5)
console.log(output)

input = ["Makys", "Alex", "Ilias"]
output = input.filter(name => name == 'Alex')

// console.log(output)

//Foreach 
// for (let name of input){
//     console.log(name)
// }

input.forEach(el => console.log(el))