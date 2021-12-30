$(document).ready(function(){
    $('#menuOpen').click(function(){
          $('#navItems').toggle({left:'50px'});

    });
});
$(document).ready(function(){
  $('.accIcon1').click(function(){
    $('.accPara1').slideToggle();

  });
  $('.accIcon2').click(function(){
    $('.accPara2').slideToggle();

});
$('.accIcon3').click(function(){
  $('.accPara3').slideToggle();

});
$('.accIcon4').click(function(){
  $('.accPara4').slideToggle();

});
$('.accIcon5').click(function(){
  $('.accPara5').slideToggle();

});
});




// javascript code// javascript code
// javascript code// javascript code

var counter = document.querySelector(".counterOne");
let count =1;
setInterval(function(){
  if(count<1300){
    count++;
    counter.innerText = count;
  }
},6);
var counter1 = document.querySelector(".counterTwo");
let count1 =1;
setInterval(function(){
  if(count1<1200){
    count1++;
    counter1.innerText = count1;
  }
},8);
var counter2 = document.querySelector(".counterThree");
let count2 =1;
setInterval(function(){
  if(count2<1400){
    count2++;
    counter2.innerText = count2;
  }
});


var aicon = document.querySelector(".accPara");
