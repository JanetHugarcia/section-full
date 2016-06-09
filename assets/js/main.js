var $doc = $(document),
    $sections = $('.section'),
    $menu = $('.main-nav a'),
    $body = $('html,body');












$(document).ready(function(){
	$('.menu-bar').on('click',function(){
		$('.contenido').toggleClass('abrir');
		$('.sidebar').toggleClass('abrir-sidebar');
	})
	setTimeout(function(){
		$('#fly-in-text').removeClass('hid');
	},500);
	
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $body.animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
	
	$('.intro div:gt(0)').hide();
	setInterval(function(){
		$('.intro div:first').fadeOut(500).next().fadeIn(1000).end().appendTo('.intro');
	},3000)
	
//	
//	$(window).scroll(function() {
//
//		windowH = $(window).height();
//
//		if ($(this).scrollTop()>windowH)
//		{
//			$('div.intro').remove();
//			$(window).scrollTop(0);
//		}
//	});
//	
//	$('.intro div:gt(0)').hide();
//	setInterval(function(){
//		$('.intro div:first').fadeOut(500).next().fadeIn(1000).end().appendTo('.intro');
//	},3000)
//	
	
	
});
//
//(function() {
//			var introEl = $('div.intro'), //where intro is the full width div
//			introHeadingH = introEl.find('h1').height(),
//			windowH = $(window).height();
//
//			introEl.css('padding', (windowH - introHeadingH)/2 + 'px 0');
//
//	})();