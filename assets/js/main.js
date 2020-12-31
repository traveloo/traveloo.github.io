(function($){
	"use strict";
	jQuery(document).on('ready', function () {

        // // Count Time
        // function makeTimer() {
        //     var endTime = new Date("September 30, 2020 17:00:00 PDT");
        //     var endTime = (Date.parse(endTime)) / 1000;
        //     var now = new Date();
        //     var now = (Date.parse(now) / 1000);
        //     var timeLeft = endTime - now;
        //     var days = Math.floor(timeLeft / 86400);
        //     var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        //     var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        //     var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        //     if (hours < "10") { hours = "0" + hours; }
        //     if (minutes < "10") { minutes = "0" + minutes; }
        //     if (seconds < "10") { seconds = "0" + seconds; }
        //     $("#days").html(days + "<span>أيام</span>");
        //     $("#hours").html(hours + "<span>ساعات</span>");
        //     $("#minutes").html(minutes + "<span>الدقائق</span>");
        //     $("#seconds").html(seconds + "<span>ثواني</span>");
        // }
		// setInterval(function() { makeTimer(); }, 300);

		// Sidebar Modal
        $(".get-more-info-btn").on('click',  function() {
			$('.sidebar-modal').toggleClass('active');
		});
        $(".sidebar-modal-close-btn").on('click',  function() {
			$('.sidebar-modal').removeClass('active');
		});

        // Subscribe Modal
		$(".notify-btn").on('click',  function() {
			$('.subscribe-modal').toggleClass('active');
		});
		$(".subscribe-modal-close-btn").on('click',  function() {
			$('.subscribe-modal').removeClass('active');
        });

        // // Subscribe form
		// $(".newsletter-form").validator().on("submit", function (event) {
		// 	if (event.isDefaultPrevented()) {
		// 	// handle the invalid form...
		// 		formErrorSub();
		// 		submitMSGSub(false, "الرجاء إدخال عنوان البريد الإلكتروني الخاص بك");
		// 	} else {
		// 		// everything looks good!
		// 		event.preventDefault();
		// 	}
		// });
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		// function submitMSGSub(valid, msg){
		// 	if(valid){
		// 		var msgClasses = "validation-success";
		// 	} else {
		// 		var msgClasses = "validation-danger";
		// 	}
		// 	$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		// }
		// // AJAX MailChimp
		// $(".newsletter-form").ajaxChimp({
		// 	url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		// 	callback: callbackFunction
		// });

		// Particles JS
		// if(document.getElementById("particles-js")) particlesJS("particles-js", {
        //     "particles": {
		// 		"number": {
		// 			"value":260, "density": {
		// 				"enable": true, "value_area": 800
		// 			}
		// 		}
		// 		, "color": {
		// 			"value": "#ffffff"
		// 		}
		// 		, "shape": {
		// 			"type":"circle", "stroke": {
		// 				"width": 0, "color": "#000000"
		// 			}
		// 			, "polygon": {
		// 				"nb_sides": 5
		// 			}
		// 			, "image": {
		// 				"src": "img/github.svg", "width": 100, "height": 100
		// 			}
		// 		}
		// 		, "opacity": {
		// 			"value":1, "random":true, "anim": {
		// 				"enable": true, "speed": 1, "opacity_min": 0, "sync": false
		// 			}
		// 		}
		// 		, "size": {
		// 			"value":3, "random":true, "anim": {
		// 				"enable": false, "speed": 4, "size_min": 0.3, "sync": false
		// 			}
		// 		}
		// 		, "line_linked": {
		// 			"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
		// 		}
		// 		, "move": {
		// 			"enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
		// 				"enable": false, "rotateX": 600, "rotateY": 600
		// 			}
		// 		}
		// 	}
		// 	, "interactivity": {
		// 		"detect_on":"canvas", "events": {
		// 			"onhover": {
		// 				"enable": true, "mode": "bubble"
		// 			}
		// 			, "onclick": {
		// 				"enable": true, "mode": "repulse"
		// 			}
		// 			, "resize":true
		// 		}
		// 		, "modes": {
		// 			"grab": {
		// 				"distance":400, "line_linked": {
		// 					"opacity": 1
		// 				}
		// 			}
		// 			, "bubble": {
		// 				"distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
		// 			}
		// 			, "repulse": {
		// 				"distance": 400, "duration": 0.4
		// 			}
		// 			, "push": {
		// 				"particles_nb": 4
		// 			}
		// 			, "remove": {
		// 				"particles_nb": 2
		// 			}
		// 		}
		// 	}
		// 	, "retina_detect":true
        // });

    });

    // WOW JS
	// $(window).on ('load', function (){
    //     if ($(".wow").length) {
    //         var wow = new WOW({
    //         boxClass:     'wow',      // Animated element css class (default is wow)
    //         animateClass: 'animated', // Animation css class (default is animated)
    //         offset:       20,         // Distance to the element when triggering the animation (default is 0)
    //         mobile:       true,       // Trigger animations on mobile devices (default is true)
    //         live:         true,       // Act on asynchronously loaded content (default is true)
    //       });
    //       wow.init();
    //     }
	// });

	// Preloader JS
	$(window).on('load', function() {
		$('.preloader').fadeOut();
	});

}(jQuery));
