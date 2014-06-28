$(document).ready(function() {
	 $('.evol-block').css('display','none');
      $('.evol-nav a').click(function(f) {
  		//$(this).toggleClass('clicked');
	    var evolBlock = $(this).data('id');
	    $('.evol-block').not('#' + evolBlock).css('display','none');
	    $('#' + evolBlock).css('display','block');
	               f.preventDefault();
  });

  });