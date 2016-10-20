$(document).ready(() => {
  $center = $('.center').eq(0);

  const cardHover = (e) => {
    let $target = $(e.target);
    if ($target.parent().attr('class').includes('card')) {
      $target = $(e.target).parent();
    }
    $center.html($target.html());
  }

  $('.card').on('mouseover', cardHover);
})
