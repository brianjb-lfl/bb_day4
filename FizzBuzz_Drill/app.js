'use strict';

// listen for input

$('.number-chooser').submit(event => {
  console.log('event ran');
  event.preventDefault();
  const userCount = $(event.currentTarget).find('#number-choice');
  console.log(`calling fb with ${userCount}`);
  fizzbuzz(userCount);
});

// get input
// cycle through numbers
//    add element
//    check and add classes


// $("ul").append(
//   `<li>${["cat", "dog", "rock"][Math.floor(Math.random()*3)]}</li>`
// );

function fizzbuzz(countTo){
  let itemClass = `fizz-buzz-item`;
  let itemTxt;
  let i;
  for (i = 1; i <= countTo; i++){
    console.log(`loop ${i}`);
    itemTxt = i;
    switch(i%15){
      case 0:
        //fizzBuzzArr.push("fizzbuzz");
        itemClass += ' fizzbuzz';
        itemTxt = 'fizzbuzz';
        break;
      case (3):
      case (6):
      case (9):
      case (12):
        //fizzBuzzArr.push("fizz");
        itemClass += ' fizz';
        itemTxt = 'fizz';        
        break;
      case 5:
      case 10:
        //fizzBuzzArr.push("buzz");
        itemClass += ' buzz';
        itemTxt = 'buzz';        
        break;
      default:
        //fizzBuzzArr.push(i);
    }

    $('.js-results').append(
      `<div class="${itemClass}">
      <span>${itemTxt}</span></div>`);
  }
  //return fizzBuzzArr;
}

console.log(`completed: ${i} times`);

// put in <div class="js-results"
//<div class="fizz-buzz-item">
{/* <span>1</span>
</div> */}
// .fizz, .buzz, .fizzbuzz


// $('img').on('click', function (event) {
//   $('.hero img').attr('src', $(this).attr('src'));
//   $('.hero img').attr('alt', $(this).attr('alt'));
//   console.log($(this).attr('src'));
// });
