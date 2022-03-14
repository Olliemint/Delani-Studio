// what we do toggle function
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

// portfolio hover
  $(document).ready(function(){
    $("#work1").hover(function(){
        $(this).fadeTo("slow",0.6)
        $("#overlay").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $("#overlay").hide();
    });
    $("#work2").hover(function(){
        $(this).fadeTo("slow",0.7)
        $(".text2").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $(".text2").hide();
    });
    $("#work3").hover(function(){
        $(this).fadeTo("slow",0.7)
        $(".text3").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $(".text3").hide();
    });
    $("#work4").hover(function(){
        $(this).fadeTo("slow",0.7)
        $(".text4").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $(".text4").hide();
    });
    $("#work5").hover(function(){
        $(this).fadeTo("slow",0.7)
        $(".text5").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $(".text5").hide();
    });
    $("#work6").hover(function(){
        $(this).fadeTo("slow",0.7)
        $(".text6").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $(".text6").hide();
    });
    $("#work7").hover(function(){
        $(this).fadeTo("slow",0.7)
        $(".text7").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $(".text7").hide();
    });
    $("#work8").hover(function(){
        $(this).fadeTo("slow",0.7)
        $(".text8").show();},
        function(){
            $(this).fadeTo("slow", 1)
            $(".text8").hide();
    });
  });
  