$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	$('.item').addClass('shrink');	

	$('body').click(function() {
		$(this).toggleClass('colorful');
	});	

	/* round corners on click */

	// $('body').click(function() {
	// 	$('.item').toggleClass('round');
	// });	

	/* hover to rotate */

	// $('.item').hover(function() {
	// 	$(this).toggleClass('rotate');
	// });	

	/* clone an element */

	// $('.item').click(function() {
	// 	var item = $(this).clone();
	// 	$('#grid').append(item);
	// });	

	/* remove an element */

	// $('.item').click(function() {
	// 	$(this).remove();
	// });

	/* random backgrounds over time */		

	// setInterval(function(){
	// 	$redValue = Math.floor(Math.random()*255);
	// 	$greenValue = Math.floor(Math.random()*255);
	// 	$blueValue = Math.floor(Math.random()*255);	
	// 	$('.item').css(
	// 		'background', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
	// 	);
	// },500);
	
});