/*
asyncronus javascript */


function satu() {
    console.log("satu");
}

function dua() {
    console.log('function 3 mau baru dieksekusi......')
    setTimeout(() => {
  console.log("dua");
    }, 3000)
  
} 

function tiga(){
    console.log("tiga")
}

satu()
dua()
tiga()