$(document).ready(function() { // begin document ready
    
    $('#available').sortable({  // begin sortable
       connectWith: '#out-of-stock',
       receive: function(event,ui) {  // begin receive
            var id = $(ui.item).attr('id');
            var available = 'yes';
            $.ajax({  // begin ajax
               url: 'ajax/sortable.ajax.php',
               type: 'GET',
               data: {
                    'id' : id,
                    'available' : available
               }
            }); // end ajax
       } // end receive
    });  // end sortable
    
    $('#out-of-stock').sortable({  // begin sortable
       connectWith: '#available',
       receive: function(event,ui) {  // begin receive
            var id = $(ui.item).attr('id');
            var available = 'no';
            $.ajax({  // begin ajax
               url: 'ajax/sortable.ajax.php',
               type: 'GET',
               data: {
                    'id' : id,
                    'available' : available
               }
            }); // end ajax
       } // end receive
    });  // end sortable
    
    $('li').on('mousedown', function() {
       $(this).css(
            {
                'background-color' : 'black',
                'color' : 'white'
            }
        )
    }).on('mouseup', function() {
        $(this).css(
            {
                'background-color': '',
                'color' : ''
            }
        )        
    });  

}); // end document ready