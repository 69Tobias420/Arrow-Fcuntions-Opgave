//Before Arrow Function Convertion

// function sum(num1, num2){
//     return num1 + num2
//     }
//     sum(40,2)
//     sum(42,0)
//     console.log("the answer to everything is", sum(42,0))
//After Arrow Function Convertion--------------------------------------------------
// let sum = (num1, num2) => num1 + num2
//         sum(40,2)
//         sum(42,0)
//         console.log("the answer to everything is", sum(42,0))

//---------------------------------------------------------------------------------

//Before Arrow Function Convertion
// function stringLength(str){
//     console.log(`the length of "${str}" is:`, str.length)
//     }
    
//     let longestCityNameInTheWorld =
//     "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
//     stringLength(longestCityNameInTheWorld)
//After Arrow Function Convertion--------------------------------------------------
// let stringLength = str => console.log(`the length of "${str}" is:`, str.length)

//     let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
//     stringLength(longestCityNameInTheWorld)
//---------------------------------------------------------------------------------

//Before Arrow Function Convertion
// function stringLength(str){
//     let length = str.length
//     console.log(`the length of "${str}" is:`, length)
//     return str.length
// }
// stringLength("willynilly")
//After Arrow Function Convertion--------------------------------------------------
// let stringLength = str => {
//     let length = str.length
//     console.log(`the length of "${str}" is:`, length)
//     return str.length
// }
// stringLength("willynilly")
//---------------------------------------------------------------------------------

//Before Arrow Function Convertion
// let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

// function showAlert(name){
//     alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
// }

// showAlert("you ball of fluff")
//After Arrow Function Convertion--------------------------------------------------
// let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

// let showAlert = name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)

// showAlert("you ball of fluff")
//---------------------------------------------------------------------------------