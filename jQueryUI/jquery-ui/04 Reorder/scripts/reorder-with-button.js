$(document).ready(function() { // begin document ready
	
	$('#update-button').click(function() {
		var data_to_send = $('#list-items').sortable("serialize");
		$.ajax({
			type: "GET",
			dataType: "JSON",
			url: "ajax/reorder.ajax.php",
			data: data_to_send
		});
		$('#update-message').html('Changes saved').css('color','green');
	});
	
	
	$('#list-items').sortable({
		containment: 'parent',
		update: function() {
			$('#update-message').html('Changes not saved').css('color','red');
		}
	});
	
	$('li').on('mouseover',function() {
	$(this).css(
		{
			'backgroundColor' : 'black',
			'color' : 'white'
		}
	);
	}).on('mouseout' ,function() {
		$('li').css(
			{
				'backgroundColor' : '',
				'color' : ''
			}
		)
	});
	
}); // end document ready