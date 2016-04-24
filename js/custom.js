$(document).ready(function(){
    
	/*
	var $container = $('#container'); // init 
	$container.isotope({ // options 
	    itemSelector: '.item', 
	    layoutMode: 'fitRows' 
	    });
	    // initialize Isotope after all images have loaded
	*/
	/*

	var $container = $('#container').imagesLoaded( function() {
	  $container.isotope({
	    // options
	  });
	 */
//});

	var $container = $('#container'); // init 
    
    $container.hide().delay(500).fadeIn('slow', function() {
        $container.isotope({ // options 
            itemSelector: '.item', 
            layoutMode: 'fitRows' 
        });
        

//Item hover
       $('.item a').hover(function() {
            $(this).find('.overlay').addClass('active');
        }, function() {
            $(this).find('.overlay').removeClass('active');
        });

        // $(".item img").animate({height: '100%'}, 500, function() {
        // });

        
//Filters
        //Add the class selected to the item that is clicked, and remove from the others
        var $optionSets = $('#filters'),
        $optionLinks = $optionSets.find('a');

        $optionLinks.click(function(){
            var $this = $(this);
            // don't proceed if already selected
            if ( $this.hasClass('selected') ) {
              return false;
            }
            var $optionSet = $this.parents('#filters');
            $optionSets.find('.selected').removeClass('selected');
            $this.addClass('selected');

            //When an item is clicked, sort the items.
             var selector = $(this).attr('data-filter');
            $container.isotope({ filter: selector });

            return false;
        });
        

//Fancybox code
         $(document).ready(function() {
                $(".fancybox").fancybox();
             
            });

//Fancybox popup        
        $(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            afterLoad   : function() {
               // this.content = this.content.html();
            }
        });
        
    });
  
});