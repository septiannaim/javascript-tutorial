/* 
for, for of, for in, while, do while,foreach
break, continue
*/

for (let z = 1; z <= 5; z++) {
    if ( z % 2 === 0) {
    console.log('data ke - ',   z)}
}
// data ke - 1 -------------------------- z = 2
// data ke - 2 -------------------------- z = 3
// data ke - 3 -------------------------- z = 4
// data ke - 4 -------------------------- z = 5
// data ke - 5 -------------------------- z = 6
// selesai looping ---------------------- z = 6


let i = 1;
while (i <= 10) {
    if ( i % 2 === 0) {
        console.log('data ke y- ',   i)
    }       
    i++
}

let y = 1;
do {
   console.log('data ke x- ',   y)
    y++
} while (y <= 10);


const mhs = ['andi', 'budi', 'caca', 'dodi'];

for (let index in mhs) {
    console.log(index); 
}

mhs.forEach(mahasiswa => {
    console.log(mahasiswa, 'adalah mahasiswa' );
});
   
mhs.map((mahasiswa, index) => {
    console.log(mahasiswa,index + 1) 
})