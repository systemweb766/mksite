'use strict'

document.onreadystatechange = function() {
  if(document.readyState == "complete") {
    var hero = 'hero';
    var heroTxtBox = 'heroTxtBox';
    var intro = 'intro';
    var target1 = document.getElementsByClassName(hero)[0];
    var target2 = document.getElementsByClassName(heroTxtBox)[0];
    var target3 = document.getElementsByClassName(intro)[0];
    if(target1 && target2) {
      TweenMax.to('.' + hero, 1.5, {
        opacity: 1,
        ease:Expo.easeInOut,
        onComplete: TweenMax.to('.' + heroTxtBox, 2, {
          opacity:1,
          x:0,
          delay: 1.5,
          ease:Power2.easeInOut
        })
      });
    }
    else if(target1 && !target2 && target3) {
      TweenMax.to('.' + hero, 1.5, {
        opacity: 1,
        ease:Expo.easeInOut,
        onComplete: TweenMax.to('.' + intro, 2, {
          opacity:1,
          x:0,
          delay:0.5,
          ease:Power2.easeInOut
        })
      });
    }
  }
}
