// Code your solutions in this file

// Assignment write cards //

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names){
    const thankYouMessages = []
    let i = 0; 
    while (i < names.length) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        thankYouMessages.push(message)
        i++;
    }
    return thankYouMessages;
}

const messages = writeCards(names)
console.log(messages)

// count down with console.log // 

function countDown(number){
    for (let i = number; i >=0; i--){
        console.log(i)
    }
}
countDown(5)