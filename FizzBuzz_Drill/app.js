'use strict';

$('#number-chooser').submit(event => {
  console.log(`event ran `);
  event.preventDefault();
  const userInput = $(event.currentTarget).find('#number-choice');
  const userCount = userInput.val();
  console.log(`calling fb with ${userCount}`);
  fizzbuzz(userCount);
});

function fizzbuzz(countTo){
  let itemTxt;
  let i;
  for (i = 1; i <= countTo; i++){
    console.log(`loop ${i}`);
    itemTxt = i;
    switch(i%15){
      case 0:
        itemTxt = 'fizzbuzz';
        break;
      case (3):
      case (6):
      case (9):
      case (12):
        itemTxt = 'fizz';        
        break;
      case 5:
      case 10:
        itemTxt = 'buzz';        
        break;
      default:
    }

    $('.js-results').append(
      `<div class="fizz-buzz-item ${itemTxt}">
      <span>${itemTxt}</span></div>`);
  }
}

