/*=========================================================
ハンバーガーボタン
===========================================================*/
$(function(){
	$(".drawer-open").click(function(){
			$(".menu-content").slideToggle(200);
			// $(".header-menu").slideToggle();
	});
});

/*==========================================================
アコーディオンメニュー
===========================================================*/
$(function() {
	var mclick = $('.menu-click > li');
$(mclick).click(function() {
	$(this).toggleClass('menu-open');
	if ($(this).hasClass('menu-open')) {
		$('ul', this).slideDown();
		} else {
		$('ul', this).slideUp();
		}
	});

	var mhover = $('.menu-hover > li');

$(mhover).hover(function() {
	$('ul:not(:animated)', this).slideDown(100);
}, function() {
	$('ul', this).slideUp(100);
});
});