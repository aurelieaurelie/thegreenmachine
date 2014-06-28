$(document).ready(function(e) {
	$('.container-home form').hide();
	$('.btn').click(function() {
    var homeForm = $(this).data('id');
    $('.container-home form').not('#' + homeForm).hide();
    $('#' + homeForm).show();
        e.preventDefault();
  });
	
});