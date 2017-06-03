$(document).ready(function() { // begin document ready
	$('#instructions-add').hide();
	$('#instructions-remove').hide();
	
	$("ul#available").mouseover(function() {
		$('#instructions-remove').show();
		$('#instructions-add').hide();
	});

	$("ul#out-of-stock").mouseover(function() {
		$('#instructions-add').show();
		$('#instructions-remove').hide();
	});	

	$(document).on('click', '#available li', function() {  // begin left side click 
		var id = $(this).attr('id');
        var available = 'no';
		$(this).remove();
		$("#out-of-stock").append(this);
		$.ajax({ // begin ajax
		   url: "ajax/click.ajax.php",
		   type: "GET",
		   data: {
			'id': id,
			'available' : available
			}, 
		}); // end ajax
	}); // end left side click

	$(document).on('click', '#out-of-stock li', function() {  // right side click
		var id = $(this).attr('id');
		var available = 'yes';
		$(this).remove();
		$("#available").append(this);
		$.ajax({ // begin ajax
		   url: "ajax/click.ajax.php",
		   type: "GET",
		   data: {
			'id': id,
			'available' : available
			}, 
		}); // end ajax
	}); // end right side click

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