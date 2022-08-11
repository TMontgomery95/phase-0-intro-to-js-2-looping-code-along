// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names, event) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event}` + ` gift!`)
  }
  return messages;
}

console.log(writeCards(names, "event"));

function countDown() {
    let countdown = 10;
    while (countdown >= 0) {
    console.log(countdown--);
    }
}
  
  countDown(10);