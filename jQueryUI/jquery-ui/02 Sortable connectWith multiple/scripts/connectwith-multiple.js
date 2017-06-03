$(document).ready(function() {
   
   	$("#lots").sortable({ // begin sortable
		connectWith: "#enough, #none",
		receive: function(event, ui) { // begin receive
			var id = $(ui.item).attr('id');
			var quantity = this.id;
			$.ajax({ // begin ajax
			   url: "ajax/connectwith-multiple.ajax.php",
			   type: "GET",
			   data: {
				'id': id,
				'quantity': quantity
				},
			}); // end ajax
		}, // end receive
	}) // end sortable

	$("#enough").sortable({ // begin sortable
		connectWith: "#lots, #none",
		receive: function(event, ui) { // begin receive
			var id = $(ui.item).attr('id');
			var quantity = this.id;
			$.ajax({ // begin ajax
			   url: "ajax/connectwith-multiple.ajax.php",
			   type: "GET",
			   data: {
				'id': id,
				'quantity': quantity
				},
			}); // end ajax
		} // end receive 
	}); // end sortable

	$("#none").sortable({ // begin sortable
		connectWith: "#lots, #enough",
		receive: function(event, ui) { // begin receive
			var id = $(ui.item).attr('id');
			var quantity = this.id;
			$.ajax({ // begin ajax
			   url: "ajax/connectwith-multiple.ajax.php",
			   type: "GET",
			   data: {
				'id': id,
				'quantity': quantity
				},
			}); // end ajax
		} // end receive 
	}); // end sortable
	
	$('li').on('mousedown', function() {
		$(this).css(
			{
				'backgroundColor' : 'black',
				'color' : 'white'
			}
		);
	}).on('mouseup', function() {
		$('li').css(
			{
				'backgroundColor' : '',
				'color' : ''
			}
		)
	});
    
});