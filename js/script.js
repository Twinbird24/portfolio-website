$(document).ready(function() {
	console.log('script started');

	var fadeTime = 200; // set the time between header animations

	fadeTheText1();
	function fadeTheText1() {
		//console.log('fadeTheText1() executing');
		$('#targetTxtl').textillate('in');
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
					fadeTheText2();
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

	// running specific animations based on scroll position
	var waypoint1 = new Waypoint({
		element: document.getElementById('main-about'),
		handler: function() {
	    	scrollFade1();
	    	this.destroy();
	    },
	    offset: '70%'
	})
	function scrollFade1() {
		console.log('scrollFade1');
		$('#main-about>h1, #main-about>p').addClass('animated fadeInUp');
	}

});