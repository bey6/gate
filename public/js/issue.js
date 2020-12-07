$(function () {
  $('button.check-btn').click(function (event) {
    $(event.target).toggleClass('check-btn--checked')
  })
})
