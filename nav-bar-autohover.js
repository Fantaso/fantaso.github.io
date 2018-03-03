// $(document).ready(function(){

//    $("section").mouseenter(function(){
//    	 var id = $(this).attr('id');
//    	 $('a').removeClass('detect-scroll-area');
//    	 $("[href=#"+id+"]").addClass('detect-scroll-area');
//    });

// });

$(document).ready(function(){

   $("section").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 if($("id") = "page") //this if not sure if it works -original code on top
   	 {					  //needed to remove this autohover from regions that were not part of the autohover sections
   	 	$('a').removeClass('detect-scroll-area');	
   	 } else {
   	 	$('a').removeClass('detect-scroll-area');
   	 	$("[href=#"+id+"]").addClass('detect-scroll-area');
   	 }
   });

});
	