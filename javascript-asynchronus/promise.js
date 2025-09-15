const token =  ~~[Math.random() * 12345678]
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log('Processing...memvalidasi data!')
    return new Promise ((success, failed) => {
  setTimeout(() => {
    if (username != "naimplung") failed("sorry wrong data")

    success({token})
    }, 200)
    
    })
  
}

function getUser(token) {
        console.log('processing apikey now.....')
return new Promise ((success, failed) => {
if(!token) failed("sorry, no token. cannot Access")
    setTimeout(() => {
 success ({apiKey: "naimkey780"})
}, 500)
})
   
   
}

function getPictures (apiKey) { 
    console.log('processing picturess now .........')
    return new Promise((success, failed) => {
 if(!apiKey) failed("no apikey, cannot access :")
        setTimeout(() => {
    success ({ pic: pictures })
}, 1500)
    })
   
}

async function userDisplay() {
    try {
    const {token} = await login("naimplung")
    const {apiKey} = await getUser(token)
    const {pic} = await getPictures(apiKey)
    
    console.log(`token anda adalah: ${token}
    apiKey anda adalah : ${apiKey}
    hasil request gambar anda berikut ini: ${pic}`
    
)}
catch (err) {
    console.error("Error:", err);
  }


}


userDisplay()

