$(function() {
	
	/* top menu for mobile screen */
	
	var menuIcon = $('.menu-icon');
	var menu = $('.nav-ul');
	var menuItem = $(menu).find($('a'));
	var portfolio = $('#s3');
	
	menu.hide();
	
	menuIcon.on('click', function() {
		$(menu).toggle(200);
	});
	
	menuItem.on('click', function() {
		/* scrolling navigation targets to correct position */
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 90
			}, 400);
		
		/* hiding opened menu after click */
		$(menu).hide(200);
	});
	
	
	/* viisbility of part of "about me" section */
	
	var showMore = $('#show-more');
	var showLess = $('#show-less');
	var aboutMore = $('#about-more');
	
	aboutMore.hide();
	showLess.hide();
	
	var showingAbout = function() {
		$(aboutMore).slideToggle(300);
		$(showMore).toggle();
		$(showLess).toggle();
	};
	
	showMore.on('click', showingAbout);
	
	showLess.on('click', showingAbout);
	
	
	/* visibility of "about this site" section */
	
	var showInfo = $('a[href="#s5"]');
	var siteInfo = $('#s5');
	
	showInfo.on('click', function(event) {
		event.preventDefault();
		if (siteInfo.is(":visible")) {
			siteInfo.slideUp(400);
		} else {
			siteInfo.slideDown(200);
		}
	});

	
	
});
  
