$(document).ready(function(){

   $("div").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 $('a').removeClass('detect-scroll-area');
   	 $("[href=#"+id+"]").addClass('detect-scroll-area');
   });

});