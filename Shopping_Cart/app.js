'use strict';

console.log('running');

$('#js-shopping-list-form').submit(event => {
  console.log('event ran');
  event.preventDefault();
  const userInput = $(event.currentTarget).find('.js-shopping-list-entry');
  console.log('testing testing');
  const shoppingItem = userInput.val();
  $('.shopping-list').append(
    `<li>
    <span class="shopping-item">${shoppingItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  userInput.val('');
});

$('ul').on('click', '.shopping-item-toggle', function(event){
  console.log('how are we doing?');
  let current = $(this).closest('li').find('span.shopping-item');
  $(current).toggleClass('shopping-item__checked');
});

$('ul').on('click', '.shopping-item-delete', function(event){
  console.log('how are we doing?');
  $(this).closest('li').remove();
});