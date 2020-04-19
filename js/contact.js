jQuery(function($) {
    $(document).ready(function() {    

        $('nav li').hover(
            function() {
                $('ul', this).stop().slideDown(200);
            },
            function() {
                $('ul', this).stop().slideUp(200);
            }
        );    

        $( '.menu_btn' ).click(function() {
          $( '.right-header-inner-block').toggleClass( "active_menu" ); 
          $( '.menu_backdrob').toggleClass( "active_backdrob" ); 
        });
        $( '.close_btn' ).click(function() {
          $( '.menu_backdrob').toggleClass( "active_backdrob" ); 
          $( '.right-header-inner-block').toggleClass( "active_menu" ); 
        });


        $( '.menu_backdrob' ).click(function() {
          $( '.menu_backdrob').removeClass( "active_backdrob" ); 
          $( '.right-header-inner-block').removeClass( "active_menu" ); 
        });
        
        

    });
});