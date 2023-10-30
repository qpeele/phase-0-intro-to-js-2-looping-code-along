function writeCards(names, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return thankYouMessages;
  }
  
  function countDown(number) {
    let countdown = number;
    while (countdown >= 0) {
      console.log(countdown);
      countdown--;
    }
  }
  
  countDown(5);
  