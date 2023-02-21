$(document).ready(function(){
    $(".icon-but").click(function(){
        $(".o").toggle(500)
    })
  })
  
  $(document).ready(function(){
    $(".service").click(function(e){
        e.preventDefault();
        if($(this).next(".inner").is(":hidden")){
            $(".inner").slideUp();
            $(this).next(".inner").slideDown();
        }
        else{
            $(this).next(".inner").slideUp();
        }
    });
    $(".service").focusout(function(e){
        $(".inner").slideUp();
    })
  })
  
  
  
  
  
  