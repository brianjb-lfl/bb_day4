'use strict';

$('img').on('click', function (event) {
  $('.hero img').attr('src', $(this).attr('src'));
  $('.hero img').attr('alt', $(this).attr('alt'));
  console.log($(this).attr('src'));
});
