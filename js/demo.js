$('.slide-btn').click(function () {
    // 有类名就移除 没就添加
    $(this).find('span').toggleClass('glyphicon glyphicon-triangle-bottom');
    $(this).find('span').toggleClass('glyphicon glyphicon-triangle-right'); 
});
$('.header #menu-btn').click(function () {
    $('.left-menu').toggleClass('active');
});
$('.list-group-item').not('.disabled').on('click', function () {
    var id = $(this).attr('href');
    $('.list-group-item').removeClass('active');
    $('.tab-content-item').removeClass('active');
    $(this).addClass('active');
    $(id).addClass('active');
});

