'use strict'


// function loadScript(src, callback) {
//   var done = false;
//   var head = document.getElementsByTagName('head')[0];
//   var script = document.createElement('script');
//   script.src = src;
//   head.appendChild(script);
//
//   //Attach handlers for all browsers
//   script.onload = script.onreadystatechange = function(){
//     if(!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")){
//       callback();
//       //Hande memory leak in IE
//       script.onload = script.onreadystatechange = null;
//       if(head && script.parentNode) {
//         head.removeChild(script);
//       }
//     }
//   };
// };
// loadScript('./../js/nav.js', function(){
//   var id = 'navigation';
//   var classOpen = 'is-Open';
//   var classNone = 'is-none';
//   var targetId = document.getElementById(id);
//
//
//   var navi = new Navi(targetId, classOpen, classNone);
//
//   /* TODO:クリックイベントでアニメーションでナビを開閉機能実装 */
//   console.log('hello');
//   navi.getNavClose();
//   navi.getNoneNavClose();
//   // navi.getnavOpen();
// });
// loadScript('./../js/ps.js', function(){
//   var id = 'PSection';
//   var targetId = document.getElementById(id);
//   var photoSection = new PhotosSection(targetId);
//   var targetClass = 'photos-sect-open';
//   photoSection.getPSOpen(targetClass);
// });
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
