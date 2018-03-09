$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	$('.item').addClass('shrink');

	$('body').click(function() {
		$(this).toggleClass('colorful');
	});

	$(window).on('scroll', function() {
	    var scrollTop = $(this).scrollTop();

      var topDistance = $('#image-1').offset().top;
      if ( (topDistance) == scrollTop ) {
          $('#date').html('2004');
      }
			var topDistance = $('#image-1').offset().top;
			if ( (topDistance) == scrollTop ) {
					$('#section').html('Log-in Page');
			}

      var topDistance1 = $('#image-2').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2006');
      }

			var topDistance1 = $('#image-3').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2007');
      }

			var topDistance1 = $('#image-4').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2008');
      }

			var topDistance1 = $('#image-5').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2009');
      }

			var topDistance1 = $('#image-6').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2010');
      }

			var topDistance1 = $('#image-7').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2004');
      }

			var topDistance1 = $('#image-7').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#section').html('Profile Page');
      }

			var topDistance1 = $('#image-8').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2005');
      }

			var topDistance1 = $('#image-9').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2005');
      }

			var topDistance1 = $('#image-10').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2006');
      }

			var topDistance1 = $('#image-11').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2007');
      }

			var topDistance1 = $('#image-12').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2008');
      }

			var topDistance1 = $('#image-13').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2009');
      }

			var topDistance1 = $('#image-14').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2009');
      }

			var topDistance1 = $('#image-15').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2010');
      }

			var topDistance1 = $('#image-16').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2011');
      }

			var topDistance1 = $('#image-18').offset().top;
			if ( (topDistance1) == scrollTop ) {
			    $('#date').html('2012');
			}

			var topDistance1 = $('#image-19').offset().top;
			if ( (topDistance1) == scrollTop ) {
					$('#date').html('2013');
			}

			var topDistance1 = $('#image-17').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2014');
      }

			var topDistance1 = $('#image-20').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2014');
      }

			var topDistance1 = $('#image-21').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2015');
      }

			var topDistance1 = $('#image-22').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2008');
      }

			var topDistance1 = $('#image-22').offset().top;
			if ( (topDistance1) == scrollTop ) {
					$('#section').html('Newsfeed Page');
			}

			var topDistance1 = $('#image-24').offset().top;
			if ( (topDistance1) == scrollTop ) {
			     $('#date').html('2008');
			}

			var topDistance1 = $('#image-23').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2009');
      }

			var topDistance1 = $('#image-25').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2009');
      }

			var topDistance1 = $('#image-26').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2010');
      }

			var topDistance1 = $('#image-27').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2011');
      }

			var topDistance1 = $('#image-28').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2012');
      }

			var topDistance1 = $('#image-29').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2013');
      }

			var topDistance1 = $('#image-30').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2014');
      }

			var topDistance1 = $('#image-31').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2015');
      }

			var topDistance1 = $('#image-32').offset().top;
      if ( (topDistance1) == scrollTop ) {
          $('#date').html('2016');
      }


			$('img').each(function(){
				if($(this).position().top == 100){
					alert('Hi');
				}
			});

			// code detecting when image hits the top
				$('img').each(function() {
					var imageDistance = $(this).offset().top;

				// this will keep firing as long as an image is 10px or less from the top of the window
				if ( (imageDistance - 10) < scrollTop ) {
						alert('Hi');
						}
					});


	});



	// $(window).scroll(function(){
	//     $('img').each(function(){
	//         var itemOffset = Math.abs($(this).offset().top);
	//         var height = $(window).height();
	//         if (itemOffset > 0 && itemOffset < height) {
	//         	alert('hi');
	//         }
	//     });
	// });


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
