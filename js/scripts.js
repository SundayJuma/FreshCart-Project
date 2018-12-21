
$(document).ready (function(){
    $('#btn2').click(function () {
        $('#preparation').show(); 
        $('#ingredients').hide();
        $('#video-recipe').hide();
        event.preventDefault();
        
    });

    $('#btn1').click(function () {
        $('#ingredients').show(); 
        $('#preparation').hide();
        $('#video-recipe').hide();
        event.preventDefault();
        
    });

    $('#btn3').click(function () {
        $('#video-recipe').show(); 
        $('#preparation').hide();
        $('#ingredients').hide();
        event.preventDefault();
        
    });
});

function howIt() {
    var elmnt = document.getElementById("itworks");
    elmnt.scrollIntoView();
  };
