jQuery(function() {
      $(".menu-item-1").hover(function() {
            $(".bg-one").fadeIn(600);
      }, function() {
            $(".bg-one").fadeOut(600);
      });
      $(".menu-item-2").hover(function() {
            $(".bg-two").fadeIn(600);
      }, function() {
            $(".bg-two").fadeOut(600);
      });
      $(".menu-item-3").hover(function() {
            $(".bg-three").fadeIn(600);
      }, function() {
            $(".bg-three").fadeOut(600);
      });
      $(".menu-item-4").hover(function() {
            $(".bg-four").fadeIn(600);
      }, function() {
            $(".bg-four").fadeOut(600);
      });
      $(".menu-item-5").hover(function() {
            $(".bg-five").fadeIn(600);
      }, function() {
            $(".bg-five").fadeOut(600);
      });
});

var t1 = new TimelineMax({paused: true});

t1.to(".menu-strip", 2, {
      width: "10%",
      ease: Expo.easeInOut
}, "-=1");

t1.to(".menu", 2, {
      width: "45%",
      ease: Expo.easeInOut
}, "-=1");

t1.staggerFrom(".menu ul li", 2, {y: 20, opacity: 0, ease: Expo.easeInOut}, 0.1);

t1.to(".images", 2, {
      width: "45%",
      ease: Expo.easeInOut,
      delay: -2,
}, "-=1");

t1.reverse();
$(document).on("click", ".menu-btn", function() {
      t1.reversed(!t1.reversed());
});
$(document).on("click", "#menu", function() {
      t1.reversed(!t1.reversed());
});
