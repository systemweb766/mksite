'use strict'


loadScript('./../js/nav.js', function(){
  var id = 'navigation';
  var classOpen = 'is-Open';
  var classNone = 'is-none';
  var targetId = document.getElementById(id);


  var navi = new Navi(targetId, classOpen, classNone);

  /* TODO:クリックイベントでアニメーションでナビを開閉機能実装 */
  console.log('hello');
  navi.getNavClose();
  navi.getNoneNavClose();
  // navi.getnavOpen();
});
