'use strict';

$('.thumbnail').on('click', function (event) {
  let currImg = $(this).find('img');
  $('.hero img').attr('src', currImg.attr('src'));
  $('.hero img').attr('alt', currImg.attr('alt'));
  console.log($(this).find('img').attr('src'));
});
