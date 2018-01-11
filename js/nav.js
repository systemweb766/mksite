'use strict'

var Navi = function(targetId, classOpen, classNone){
  //コンストラクター
  this.targetId = targetId;
  this.classOpen = classOpen;
  this.classNone = classNone;
};


/* getter */
Navi.prototype.getNavOpen = function(){
  return this.naviOpen();
};
Navi.prototype.getNavClose = function(){
  return this.naviClose();
};
Navi.prototype.getNoneNavOpen = function(){
  return this.noneNaviOpen();
};
Navi.prototype.getNoneNavClose = function(){
  return this.noneNaviClose();
};


/* method */
/* is-Openクラスを追加 */
Navi.prototype.naviOpen = function(){
  if(this.hasClass(this.targetId, this.classOpen)) {
      return false;
  }
  return this.targetId.classList.add(this.classOpen);
};
/* is-noneクラスを追加 */
Navi.prototype.naviClose = function(){
  if(this.hasClass(this.targetId, this.classNone)) {
      return false;
  }
  return this.targetId.classList.add(this.classNone);
};
/* is-Openクラスを除去 */
Navi.prototype.noneNaviOpen = function(){
  if(!this.hasClass(this.targetId, this.classOpen)) {
      return false;
  }
  return this.targetId.classList.remove(this.classOpen);
};
/* is-noneクラスを除去 */
Navi.prototype.noneNaviClose = function(){
  if(!this.hasClass(this.targetId, this.classNone)) {
      return false;
  }
  return this.targetId.classList.remove(this.classNone);
};
/* クラスを持つかどうか判定 */
Navi.prototype.hasClass = function(element, className){
  return (' ' + element.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + className + ' ') !== -1;
};
