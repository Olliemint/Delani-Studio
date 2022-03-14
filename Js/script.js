$(document).ready(function() {
    $("#design-image").click(function() {
      $("#design").toggle();
      $("#design-image").toggle();
    });
    $("#design").click(function(){
        $("#design-image").toggle(); 
        $("#design").hide();

    })
    $("#development-image").click(function(){
        $("#development").toggle();
        $("#development-image").hide();


    })
    $("#development").click(function(){
        $("#development-image").toggle();
        $("#development").hide();


    })
    $("#product-image").click(function(){
        $("#product").toggle();
        $("#product-image").hide();


    })
    $("#product").click(function(){
        $("#product-image").toggle();
        $("#product").hide();


    })
    

  });


  $(document).ready(function(){
    $("#work1").hover(function(){
        $(this).fadeTo("slow",0.6)
        $("#overlay").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $("#overlay").hide();
    });
    $("#work2").hover(function(){
        $(this).fadeTo("slow",0.6)
        $(".text2").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $(".text2").hide();
    });
  });