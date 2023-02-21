// const navMenu=document.getElementById("nav-menu"),toggleMenu=document.getElementById("toggle-menu"),closeMenu=document.getElementById("close-menu")

// toggleMenu.addEventListener("click",()=>{
//     navMenu.classList.toggle("show")
// })

// closeMenu.addEventListener("click",()=>{
//     navMenu.classList.remove("show")
// })


function counter() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap6 .counter").text());
        $(".wrap6 .counter").text((++c).toString());
        if (c == 95000) {
            clearInterval(count)
        }
    }, 60)
}
counter();

function counter1() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap6 .counter1").text());
        $(".wrap6 .counter1").text((++c).toString());
        if (c == 5000) {
            clearInterval(count)
        }
    }, 60)
}
counter1();
function counter2() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap6 .counter2").text());
        $(".wrap6 .counter2").text((++c).toString());
        if (c == 460) {
            clearInterval(count)
        }
    }, 60)
}
counter2();
function counter3() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap6 .counter3").text());
        $(".wrap6 .counter3").text((++c).toString());
        if (c == 3) {
            clearInterval(count)
        }
    }, 1960)
}
counter3();



$('.responsive-testi').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          
  /* $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }); */

// setTimeout(() => {
//     document.querySelector(".wrap0 form").style.display="block"
//     document.querySelector(".op").style.opacity="0.5"
// }, 2000);

document.querySelector(".cross").addEventListener("click",function(){
    document.querySelector(".wrap0 form").style.display="none"
    document.querySelector(".op").style.opacity="1"
})


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







$(document).ready(function(){
  $(".wrap3 .helloBox1").waypoint(function(direction){
      $(".wrap3 .helloBox1").addClass("animated rotateInDownLeft")
  },{
       offset:"50%"
   })
})

$(document).ready(function(){
  $(".wrap3 .helloBox2").waypoint(function(direction){
      $(".wrap3 .helloBox2").addClass("animated animated rotateIn")
  }, {
      offset:"50%"
  })
})

$(document).ready(function(){
  $(".wrap3 .helloBox3").waypoint(function(direction){
      $(".wrap3 .helloBox3").addClass("animated rotateInDownRight")
  }, {
      offset:"70%"
  })
})
$(document).ready(function(){
  $(".wrap4 .helloBox4").waypoint(function(direction){
      $(".wrap4 .helloBox4").addClass("animated fadeInLeft")
  }, {
      offset:"75%"
  })
})
$(document).ready(function(){
  $(".wrap4 .helloBox5").waypoint(function(direction){
      $(".wrap4 .helloBox5").addClass("animated fadeInRight")
  }, {
      offset:"75%"
  })
})

$(document).ready(function(){
  $(".wrap7 .helloBox6").waypoint(function(direction){
      $(".wrap7 .helloBox6").addClass("animated rotateInDownLeft")
  },{
       offset:"70%"
   })
})
$(document).ready(function(){
  $(".wrap7 .helloBox7").waypoint(function(direction){
      $(".wrap7 .helloBox7").addClass("animated rotateInDownRight")
  }, {
      offset:"70%"
  })
})