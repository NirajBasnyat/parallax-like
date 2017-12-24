$(document).ready(function() {

	$('.scroll').click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop:$(this.hash).offset().top
		},1000);
	})

});
//change of active class
$(window).scroll(function(){

	var scrollBarLocation= $(this).scrollTop();
	$('.scroll').each(function(){
		var sectionOffset= $(this.hash).offset().top -10;
		if(sectionOffset<=scrollBarLocation)
		{
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		}
	});
});
