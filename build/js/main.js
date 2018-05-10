var tl = new TimelineMax(),
    tl2 = new TimelineMax(),
    tl3 = new TimelineMax();

function random(min, max) {
    return Math.random() * (max - min) + min;
}

$(document).ready(function(){
    

    $('.star-sm').click(function() {
        var t = $(this);
        TweenMax.to(t, 4, {y: 2000, rotation: 1000, transformOrigin: "50% 50%"});
        setTimeout(function() {
            TweenMax.set(t, {y: 0, scale: 0, rotation: 360, transformOrigin: "50% 50%"});
            TweenMax.to(t, 1, {scale: 1, rotation: 0, transformOrigin: "50% 50%"});
        },6000);
    });



    
    TweenMax.set('.star-light', {opacity: 0, transformOrigin: "50% 50%"});
    TweenMax.set('.star', {x: -2000, y: 1000, opacity: 1, rotation: -500, transformOrigin: "50% 50%"});

    TweenMax.set('.star-suc', {x: -2000, y: 1000, opacity: 1, scale: 0.4, rotation: -500, transformOrigin: "50% 50%"});

    

});

$(window).load(function(){
    if($(window).width() >= 1024) {
        TweenMax.to('.stars', 80,{
            backgroundPosition: "" + $(window).width() +"px 0px",
            ease: Linear.easeNone,
            repeat:-1
        });

        TweenMax.to('.stars-form', 70,{
            backgroundPosition: "" + $(window).width() +"px -"+ $(window).height() + "px",
            ease: Linear.easeNone,
            repeat:-1
        });

        TweenMax.to('.stars-suc', 70,{
            backgroundPosition: "" + $(window).width() +"px 0px",
            ease: Linear.easeNone,
            repeat:-1
        });
    } else {
        TweenMax.to('.stars', 40,{
            backgroundPosition: "" + $(window).width() +"px 0px",
            ease: Linear.easeNone,
            repeat:-1
        });
        TweenMax.to('.stars-form', 30,{
            backgroundPosition: "" + $(window).width() +"px -"+ $(window).height() + "px",
            ease: Linear.easeNone,
            repeat:-1
        });
        TweenMax.to('.stars-suc', 20,{
            backgroundPosition: "" + $(window).width() +"px 0px",
            ease: Linear.easeNone,
            repeat:-1
        });        
    }

    tl.to('.eyebrow-right', 1, {x: 1, y: -4, ease: Back.easeOut.config(1.7)})
    .to('.eyebrow-right', 1, {x: 0, y: 0, ease: Back.easeOut.config(1.7)}, '+=2');

    tl2.to('.eyebrow-left', 1, {x: -1, y: -4, ease: Back.easeOut.config(1.7)})
    .to('.eyebrow-left', 1, {x: 0, y: 0, ease: Back.easeOut.config(1.7)}, '+=2');

    setInterval(function() {
        tl.restart();
        tl2.restart();
    },10000);

    
    setInterval(function() {
        TweenMax.to('.star-sm-1', 0.3, {opacity: 0, repeat:1, yoyo:true});
    },random(3000, 15000));

    setInterval(function() {
        TweenMax.to('.star-sm-2', 0.3, {opacity: 0, repeat:1, yoyo:true});
    },random(3000, 15000));

    setInterval(function() {
        TweenMax.to('.star-sm-3', 0.3, {opacity: 0, repeat:1, yoyo:true});
    },random(3000, 15000));

    setInterval(function() {
        TweenMax.to('.star-sm-4', 0.3, {opacity: 0, repeat:1, yoyo:true});
    },random(3000, 15000));

    setInterval(function() {
        TweenMax.to('.star-sm-5', 0.3, {opacity: 0, repeat:1, yoyo:true});
    },random(3000, 15000));

    setInterval(function() {
        TweenMax.to('.star-sm-6', 0.3, {opacity: 0, repeat:1, yoyo:true});
    },random(3000, 15000));

    var starPosotionX,
        starPosotionY,
        w = $(window).width();

    if (w >= 1281) {
        starPosotionX = -70,
        starPosotionY = -95
    } else if(w >= 1025 && w <= 1280) {
        starPosotionX = 0,
        starPosotionY = -50
    } else if(w >= 769 && w <= 1024) {
        starPosotionX = 0,
        starPosotionY = 50
    } else if(w >= 415 && w <= 768) {
        starPosotionX = 0,
        starPosotionY = 250
    } else if(w >= 320 && w <= 414) {
        starPosotionX = -650,
        starPosotionY = 0
    }

    tl3.to('.star-suc', 3, {x: starPosotionX, y: starPosotionY, rotation: '29deg', ease: Power3.easeOut})
    .to('.star-suc', 0.5, {scale: 1, ease: Back.easeOut.config(1.7)},'-=0.7')
    .staggerTo('.star', 3, {x: 0, y: 0, rotation: 0, ease: Power3.easeOut}, 0.5)
    .staggerTo('.star-light', 2, {opacity: 0.5, scale: random(0.7, 0.9)}, 0.1,)
    .staggerTo('.star-light', 2, {scale: 1, repeat: -1, ease: Power1.easeInOut, yoyo:true, transformOrigin: "50% 50%"}, 0.1)

    TweenMax.to('.star-big', 3, {rotation: -10, yoyo:true, repeat: -1, ease: Elastic.easeInOut.config(1, 0.3), transformOrigin: "0% 100%"});

});