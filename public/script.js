
// $(document).ready(function () {
//    $(".icon").click(function () {
//         $(".topNav").toggleClass("responsive");
//    });
// });

$( function() {
	$( "#button" ).on( "click", function() {
		$( "#effect" ).toggleClass( "newClass", 1000 );
	});

        // $(".photoWall img").fadeIn(3000);


$('.photoWall img').each(function(i) {
   $(this).delay(i * 400).fadeIn(3000);
});
// $('.photoWall img').each(function(i) {
//    $(this).delay(i * 400).fadeIn(3000);
// });
// function name(){
// for(var i=21; i<36; i++){
// 	console.log('<div><img src="../public/img/small/'+i+'.jpg"></div>');
// }
// }
// name();

$(".topNav .icon").click(function(){
		// $(".topNav.responsive").toggleClass("displayNone",40000 );
		$(".topNav .icon").toggleClass('slideDown');
		$(".topNav .icon").toggleClass('slideUp');
		if ($(".topNav .icon").hasClass('slideDown')){
			$(".topNav.responsive").slideDown();

		}else{
			$(".topNav.responsive").slideUp();

		}

	});
	function checkWidth(){
		if ($(window).width() >1000) {

			$('.topNav.responsive').css('display','none');
		}
	}
	checkWidth();
	$(window).resize(checkWidth);





	$(".search-text").on('change paste keyup',function(){
		var value = $(this).val().toLowerCase();
		if(!value){
			$('.list-search-style').html('');
		}
		else{
			_searchStart(value);
		}
		function _searchStart(v){
			$('.list-search-style').html(
				'.list-search img:not([data-title*="' + v + '"]) {display: none;}'
				);
		}

	});
console.log('hello');

} )();

