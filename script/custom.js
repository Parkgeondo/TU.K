const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');





/*교수님 프로필 모달*/
$(function(){ 

  $(".delete").click(function(){
    $(".professor_modal").fadeIn();
  });
  
  $(".delete").click(function(){
    $(".professor_modal").fadeOut();
  });
  
});

/*교수님 이미지 모달*/
$(function(){ 

  $(".professor_img").click(function(){
    $(".email").fadeIn();
  });
  
  });
  

/*교수님 그리드 이미지 모달*/
  $(function(){ 

    $(".item").click(function(){
      $(".modal").fadeIn();
    });
    
    $(".modal").click(function(){
      $(".modal").fadeOut();
    });
    
  });
  


/*학생 이미지 모달*/

$('.profile_wrap .profile_img').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

  $('.profile').removeClass('active')
  $('#' + $(this).attr('data-alt')).addClass('active')
})





let index = 0;
prevButton.addEventListener('click', () => {
  if (index === 0) return;
  index -= 1;
  carousel.style.transform = `translate3d(-${1330 * index}px, 0, 0)`;
});
nextButton.addEventListener('click', () => {
  if (index === 2) return;
  index += 1;
  carousel.style.transform = `translate3d(-${1330 * index}px, 0, 0)`;
});


$(".hov-anim").mouseover(function() {
  $(this).attr("src", $(this).data("animated"))
}),
$(".hov-anim").mouseout(function() {
  $(this).attr("src", $(this).data("static"))
});

