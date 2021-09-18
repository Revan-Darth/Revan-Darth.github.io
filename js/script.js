// $(document).ready(function(){
// 	$('.notebook__content').slick({
// 		arrows:false,
// 		dots:true,
// 		adaptiveHeight:true,
// 		slidesToShow:1,
// 		slidesToScroll:1,
// 		speed: 1000,
// 		easing:'ease',
// 		infinite:true,
// 		autoplay:true,
// 		autoplaySpeed:1000,
// 		pauseOnFocus:true,
// 		pauseOnHover:false,
// 		pauseOnDotsHover:false,
// 		dragable:true,
// 		centerMode:false,
// 	});
// });
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu-list').toggleClass('active');
	});
});