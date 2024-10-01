(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-sz-top')[0],
		offset = 0, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 0,
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		// backTop.addEventListener('click', function(event) {
		// 	event.preventDefault();
		// 	(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		// });
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'sz-top--is-visible') : Util.removeClass(backTop, 'sz-top--is-visible sz-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'sz-top--fade-out');
		scrolling = false;
	}
})();