

const arrayBuah = ['apel', 'semangka', 'pisang','jeruk']


//membuat salinan array
//shalow copy
// const newArrayBuah = arrayBuah.slice()
// const newArrayBuah = arrayBuah.map((buah) => buah)
//
const newArrayBuah = [...arrayBuah]

newArrayBuah[0] = 'anggur'

console.log({arrayBuah})
console.log({newArrayBuah})