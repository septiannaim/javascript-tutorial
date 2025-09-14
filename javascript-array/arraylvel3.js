/*
Array
- Array adalah tipe data yang digunakan untuk menyimpan sekumpulan nilai dalam satu variabel.
- Array dapat menyimpan berbagai tipe data, termasuk angka, string, objek, dan bahkan array lainnya.
- Array di JavaScript dimulai dengan indeks 0, artinya elemen pertama berada di indeks 0, elemen kedua di indeks 1, dan seterusnya.
- Array dapat dibuat menggunakan tanda kurung siku [] atau menggunakan konstruktor Array().
BERSENANDUNG DENGAN ARRAY
*/


const arrayBuah = ['apel', 'semangka', 'pisang','jeruk']

const semangka = arrayBuah.includes('semangka')



if (semangka) {
    const posisiSemangka = arrayBuah.indexOf('semangka')
    const indexBefore = posisiSemangka - 1
    const indexAfter = posisiSemangka + 1
    const before = arrayBuah[indexBefore]
    const after = arrayBuah[indexAfter]
    console.log(`buah sebelum semangka adalah ${before}`)
    console.log(`buah setelah semangka adalah ${after}`)
    console.log(`buah semangka ditemukan pada posisi - ${posisiSemangka}`)
    const buahAwal = arrayBuah.shift()
    console.log(`buah yang diambil adalah ${buahAwal}`)
    const buahAkhir = arrayBuah[arrayBuah.length -1]
    console.log(`buah yang diambil adalah ${buahAkhir}`)
} else {
   console.log('tidak ada semangka')
}
   
