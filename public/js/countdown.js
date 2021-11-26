$('#timer').countdown('2021/01/30').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
        + '<span>%D</span> Day%!d'
        + '<span>%H</span> Hr'
        + '<span>%M</span> Min'
        + '<span>%S</span> Sec'));
});