$(document).ready(function() {
	$('.container-home form').hide();
	$('.btn').click(function(e) {
    var homeForm = $(this).data('id');
    $('.container-home form').not('#' + homeForm).hide();
    $('#' + homeForm).show();
        e.preventDefault();
  });

	$('.evol-block').css('display','none');
      $('.evol-nav a').click(function(f) {
  		//$(this).toggleClass('clicked');
	    var evolBlock = $(this).data('id');
	    $('.evol-block').not('#' + evolBlock).css('display','none');
	    $('#' + evolBlock).css('display','block');
	    console.log('ouin');
	      f.preventDefault();
  });
	
});