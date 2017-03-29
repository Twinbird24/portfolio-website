$(window).on('load', function() {
	//console.log('script started');

	// remove preloader
	$('.pre-load').fadeOut();
	// start intro text animations
	$('#home_text h1').css('animation', 'homeTextInRight 1.2s ease-out');
	$('#home_text h3').css('animation', 'homeTextInLeft 1.6s ease-out');
	$('#home_text h4').css('animation', 'homeTextInRight2 1.4s ease-out');

	// 1: main header animations
	// 2: scroll-triggered handlers
	// 3: e-mail pop-up
	// 4: project items' effects
	// 5: nav menu click and scroll handlers

	// --1-- // --- main header animations *start* --- //
	var fadeTime = 200; // set the time between header animations
	fadeTheText1(); // run the first header fade animation
	function fadeTheText1() {
		//console.log('fadeTheText1() executing');
		$('#targetTxtl').textillate('in'); // using the textillate.js library, we run the letter-by-letter "in" animations on the header
		// the in key sets the properties for the in animation, the out key sets them for once the animation is complete
		$('#targetTxtl').textillate({
			in: {
				loop: true,
				effect: 'fadeIn',
				shuffle: true,
				callback: function () {
					//console.log('h1 fadeIn complete');
					setTimeout(function(){
						//console.log('starting h1 fadeOut');
						$('#targetTxtl').textillate('out');
					}, fadeTime);
				}
			},
			out: {
				effect: 'fadeOut',
				callback: function () {
					//console.log('h1 fadeOut complete');
					fadeTheText2(); // once the first fade is complete, we will run the next animation
				}
			}
		});
	}

	function fadeTheText2() {
		//console.log('fadeTheText2() executing');
		$('#targetTxt2').textillate('in');
		$('#targetTxt2').textillate({
			in: {
				effect: 'fadeIn',
				shuffle: true,
				callback: function () {
					//console.log('h2 fadeIn complete');
					setTimeout(function(){
						//console.log('starting h2 fadeOut');
						$('#targetTxt2').textillate('out');
					}, fadeTime);
				}
			},
			out: {
				effect: 'fadeOut',
				callback: function () {
					//console.log('h2 fadeOut complete');
					fadeTheText3();
				}
			}
		});
	}

	function fadeTheText3() {
		//console.log('fadeTheText3() executing');
		$('#targetTxt3').textillate('in');
		$('#targetTxt3').textillate({
			in: {
				effect: 'fadeIn',
				shuffle: true,
				callback: function () {
					//console.log('h3 fadeIn complete');
					setTimeout(function(){
						//console.log('starting h3 fadeOut');
						$('#targetTxt3').textillate('out');
					}, fadeTime);
				}
			},
			out: {
				effect: 'fadeOut',
				callback: function () {
					//console.log('h3 fadeOut complete');
					fadeTheText1();
				}
			}
		});
	}
	// --- main header animations *end* --- //


	// --2-- // --- running specific animations based on scroll position *start* --- //
	// we use the waypoint.js plugin for triggering functions when the selected element is scrolled to
	// animation for the about me
	var waypoint1 = new Waypoint({
		element: document.getElementById('main-about'),
		handler: function() {
	    	scrollFade1(); // run the function when the selected element is scrolled to
	    	this.destroy(); // destroy the waypoint, so it doesn't keep re-running once it's already ran once
	    },
	    offset: '70%' // the handler will execute when the selected element is 70% (for example) from the top of the viewport
	})
	function scrollFade1() {
		//console.log('scrollFade1');
		$('#main-about>h1, #main-about>p').addClass('animated fadeInUp'); // using the animate.css library, we fade the element in and up
	}

	// animation for the grid/ projects
	var waypoint2 = new Waypoint({
		element: document.getElementById('grid'),
		handler: function() {
	    	scrollFade2();
	    	this.destroy();
	    },
	    offset: '70%'
	})
	function scrollFade2() {
		//console.log('scrollFade2');
		$('#grid>div').addClass('animated fadeInUp');
	}

	// animation for the skills section headers and icons
	var waypoint3 = new Waypoint({
		element: document.getElementById('my_services'),
		handler: function() {
	    	scrollFade3();
	    	this.destroy();
	    },
	    offset: '70%'
	})
	function scrollFade3() {
		//console.log('scrollFade3');
		$('#my_services h3, #icon_holder').addClass('animated fadeIn');
	}

	// animation for the skills section left paragraph
	var waypoint4 = new Waypoint({
		element: document.getElementById('my_services'),
		handler: function() {
	    	scrollFade4();
	    	this.destroy();
	    },
	    offset: '60%'
	})
	function scrollFade4() {
		//console.log('scrollFade4 - left <p>');
		$('#left_p').addClass('animated fadeInLeft');
	}

	// animation for the skills section middle paragraph
	var waypoint5 = new Waypoint({
		element: document.getElementById('my_services'),
		handler: function() {
	    	scrollFade5();
	    	this.destroy();
	    },
	    offset: '60%'
	})
	function scrollFade5() {
		//console.log('scrollFade5 - middle <p>');
		$('#middle_p').addClass('animated fadeInUp');
	}

	// animation for the skills section right paragraph
	var waypoint6 = new Waypoint({
		element: document.getElementById('my_services'),
		handler: function() {
	    	scrollFade6();
	    	this.destroy();
	    },
	    offset: '60%'
	})
	function scrollFade6() {
		//console.log('scrollFade6 - right <p>');
		$('#right_p').addClass('animated fadeInRight');
	}
	// --- running specific animations based on scroll position *end* --- //


	// --3-- // --- handling the click event for the message button *start* --- //
	// open the pop-up
	$('#send_msg_btn').click(function() {
		//console.log('Send message button clicked');
		$('#pop-up').fadeIn('fast');
	});

	// close the pop-up
	$('#popup-closeC, #popup-closeX').click(function() {
	       $('#pop-up').fadeOut('fast');
	});
	// --- handling the click event for the message button *end* --- //


	// --4-- // --- project hover effects *start* --- //
	$('.item').hover(
		function() {
	    	$(this).removeClass('desaturate'); // bring colour back to image
	    	$(this).find('div').fadeTo('fast', 1); // fade in header
		}, function() {
			$(this).addClass('desaturate'); // make image black-and-white again
			$(this).find('div').fadeTo('fast', 0); // fade out header
		}
	);

	// open pop-up for clicked project
	$('.item').click(function() {
		// load the data from external html document via ajax
		$('#fade_container').load($(this).data('source'), function() {
			// contents are faded in
			$('#proj_pop-up').fadeIn('fast');
		});
	});
	// close the project pop-up
	$('#proj_popup-closeC, #proj_popup-closeX').click(function() {
	       $('#proj_pop-up').fadeOut('fast');
	});
	// --- project hover effects *end* --- //


	// --5-- // --- nav menu click and scroll *start* --- //
	$('#logo').mouseup(function() {
		$.scrollTo('0', 300);
	});
	$('#li_1').mouseup(function() {
		$.scrollTo('#main-about', 300, {offset: -75});
	});
	$('#li_2').mouseup(function() {
		$.scrollTo('#proj-header', 300, {offset: -75});
	});
	$('#li_3').mouseup(function() {
		$.scrollTo('#my_services_header', 300, {offset: -75});
	});
	// waypoint for animating-in/out the nav menu
	var waypoint7 = new Waypoint({
		element: document.getElementById('targetTxt3'),
		handler: function(direction) {
			console.log(direction)
			if(direction == 'down') {
				$('nav').animate({top: "0", opacity: 1}, 300);
			} else {
				$('nav').animate({top: "-80", opacity: 0}, 300);
			}
	    },
	    offset: '60'
	})
	// --- nav menu click and scroll *end* --- //

});