/* belajar function javascript */

//return -> mengembalikan nilai atau console.log


//cara 1 keyword new Function
const sum1 = new Function('x', 'y', 'console.log(x + y)')

//cara 2 standard function
function sum2(x, y) {
    if (x + y == 4)
   { console.log('wowww')

   }
    //return x + y
}

//cara 3 arrow function
const sum3 = (x, y) => console.log(x + y)

function randomsize() {
    const randomNumber = ~~(Math.random() * 100)
    if (randomNumber > 200) {
        console.log('wow lebih dari 200', randomNumber)
    } else {
        console.log(randomNumber)
    }
}
randomsize()
sum1(1, 2)
sum2(1, 3)
sum3(1, 2)