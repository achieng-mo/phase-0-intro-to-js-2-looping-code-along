
//create a new, empty array to hold the messages
//iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
//after the loop finishes and all of the messages have been added to the new array, return the new array

//function to return an array of thank you messages for each name provided

function writeCards(names) {
    let appreciationMessages = [];

    for (let i = 0; i < names.length; i++) {
      appreciationMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return appreciationMessages;
  }

  let names = ["Guadalupe", "Ollie", "Aki"];
  let message = writeCards(names);
  
  console.log(message)

  // function to count down from the number provided to zero


  function countDown(count) {
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  countDown(10);

