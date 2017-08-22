$( document ).ready( function(){

  $( "#pbtn" ).click( function(){
    $("#personal").css("display","initial");
  });

  $( "#close" ).click( function(){
    $("#personal").css("display","none");
  });

  //nav functions
  $("#p1").click( function(){
    killNav() ;
    $("#d1").addClass("active");
    $("#p1").addClass("active");
    $(".display").css( "background-image" , 'url("assets/images/p1.png")' ) ;
  }) ;
  $("#p2").click( function(){
    killNav() ;
    $("#d2").addClass("active");
    $("#p2").addClass("active");
    $(".display").css( "background-image" , 'url("assets/images/p2.png")' ) ;
  }) ;
  $("#p3").click( function(){
    killNav() ;
    $("#d3").addClass("active");
    $("#p3").addClass("active");
    $(".display").css( "background-image" , 'url("assets/images/p3.png")' ) ;
  }) ;
  $("#p4").click( function(){
    killNav() ;
    $("#d4").addClass("active");
    $("#p4").addClass("active");
    $(".display").css( "background-image" , 'url("assets/images/p4.png")' ) ;
  }) ;

  //function for displaying skill level
  $("#skills .skill-group .s1 .fa-plus").hover( function(){
    $("#skills .skill-group .s1 i").removeClass("fa-plus");
    $("#skills .skill-group .s1 i").addClass("fa-minus");
    $("#skills .skill-group .s1").css( "display" , "block" ) ;
  }) ;
  $("#skills .skill-group .s2 .fa-plus").hover( function(){
    $("#skills .skill-group .s2 i").removeClass("fa-plus");
    $("#skills .skill-group .s2 i").addClass("fa-minus");
    $("#skills .skill-group .s2").css( "display" , "block" ) ;
  }) ;
  $("#skills .skill-group .s3 .fa-plus").hover( function(){
    $("#skills .skill-group .s3 i").removeClass("fa-plus");
    $("#skills .skill-group .s3 i").addClass("fa-minus");
    $("#skills .skill-group .s3").css( "display" , "block" ) ;
  }) ;
  $("#skills .skill-group .s4 .fa-plus").hover( function(){
    $("#skills .skill-group .s4 i").removeClass("fa-plus");
    $("#skills .skill-group .s4 i").addClass("fa-minus");
    $("#skills .skill-group .s4").css( "display" , "block" ) ;
  }) ;
  $("#skills .skill-group .s5 .fa-plus").hover( function(){
    $("#skills .skill-group .s5 i").removeClass("fa-plus");
    $("#skills .skill-group .s5 i").addClass("fa-minus");
    $("#skills .skill-group .s5").css( "display" , "block" ) ;
  }) ;
  $("#skills .skill-group .s6 .fa-plus").hover( function(){
    $("#skills .skill-group .s6 i").removeClass("fa-plus");
    $("#skills .skill-group .s6 i").addClass("fa-minus");
    $("#skills .skill-group .s6").css( "display" , "block" ) ;
  }) ;
  $("#skills .skill-group .s7 .text").hover( function(){
    $("#skills .skill-group .s7 i").removeClass("fa-plus");
    $("#skills .skill-group .s7 i").addClass("fa-minus");
    $("#skills .skill-group .s7").css( "display" , "block" ) ;
  }) ;

  
}) ;

function killNav(){
  $("#d1").removeClass("active");
  $("#p1").removeClass("active");
  $("#d2").removeClass("active");
  $("#p2").removeClass("active");
  $("#d3").removeClass("active");
  $("#p3").removeClass("active");
  $("#d4").removeClass("active");
  $("#p4").removeClass("active");
}
