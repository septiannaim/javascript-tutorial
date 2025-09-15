const token =  ~~[Math.random() * 12345678]
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username, callback) {
    console.log('Processing...memvalidasi data!')
    setTimeout(() => {
callback( {token, username})
    }, 200)
    
}

function getUser(token, callback) {
        console.log('processing apikey now.....')
   if(token) 
    setTimeout(() => {
 callback({apiKey: "naimkey780"})
}, 500)
   
}

function getPictures (apiKey, callback) { 
    console.log('processing picturess now .........')
    if(apiKey)
        setTimeout(() => {
    callback ({ pic: pictures })
}, 1500)
}

login("naimplung", function(respone) {
    const {token} = respone
    getUser(token, function(respone){
        const {apiKey} = respone
        getPictures(apiKey, function (respone) {
            const {pic} = respone
            console.log(pic)
         })
    })
})



//const user = login("naimplung");
//console.log(user.token)

//const {apiKey} = getUser(user.token);
//console.log(apiKey)

//const getUserPictures = getPictures(apiKey)
//console.log(getUserPictures)

//console.log(user);

 