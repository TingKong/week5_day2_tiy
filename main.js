$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-left-sm',
    outClass: 'fade-out-left-sm',
    inDuration: 2000,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
    
    

     $('.slideDown li').hide().each(function (index) {
        $(this).delay(800 * index).fadeIn(1500);
    });
	
	
	$('.slideDown ').click(function() {
  $('.slideDown ').fadeOut(2000);
	 });
	
	
	     $('nav .nav_before').hover.fadeIn(1500);

	$('.sc4_content a ').on('click', function(e) {
	
		event.preventDefault()
  		$('.project1 a').fadeIn("slow");
	 });
	
});

