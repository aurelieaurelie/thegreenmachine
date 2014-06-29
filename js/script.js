$(document).ready(function() {
	$('.container-home form').hide();
	$('.btn').click(function(e) {
    var homeForm = $(this).data('id');
    $('.container-home form').not('#' + homeForm).hide();
    $('#' + homeForm).show();
        e.preventDefault();
  });

	$('.evol-block').hide();
      $('.evol-nav a, .engagement-nav a').click(function(f) {
	    var evolBlock = $(this).data('id');
	    $('.evol-block').not('#' + evolBlock).hide();
	    $('#' + evolBlock).show();
	    console.log('ouin');
	      f.preventDefault();
  });
	
});