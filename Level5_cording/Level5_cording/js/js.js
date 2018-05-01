$(function() {
    $("#slider01_pc").slick({
      autoplay: true,
      autoplayspeed: 3000,
      arrows: false,
      dots: true,
      infinite: true
    });
});
$(function() {
    $("#slider01_sp").slick({
      autoplay: true,
      autoplayspeed: 3000,
      arrows: false,
      dots: true,
      infinite: true
    });
});

$(function(){
  var slider = "#slider02";
  var thumbnailItem = "#thumbnail-list .thumbnail-item";
  $(thumbnailItem).each(function(){
    var index = $(thumbnailItem).index(this);
    $(this).attr("data-index",index);
  });
  $(slider).on('init',function(slick){
    var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });
  $(slider).slick({
    autoplay: true,
    arrows: true,
    prevArrow: '<img src="images_pc/arrow_left.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="images_pc/arrow_right.png" class="slide-arrow next-arrow">',
    infinite: true
  });
  $(thumbnailItem).on('click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
    $(this).removeClass("thumbnail-current")
    .removeClass("filter").css("background-color", "white").css("color", "red");
  });
  $(thumbnailItem+'[data-index="'+nextSlide+'"]')
    .addClass("thumbnail-current").removeClass("filter").css("background-color", "red").css("color", "white");
  });
});
