'use strict'

var PhotosSection = function(targetId){
  //コンストラクター
  this.targetId = targetId;
};


/* getter */
PhotosSection.prototype.getPSOpen = function(targetClass){
  return this.PSOpen(targetClass);
};


/* method */
/* photos-sect-openクラスを追加 */
PhotosSection.prototype.PSOpen = function(targetClass){
  if(this.targetId) {
      this.targetId.classList.add(targetClass);
      return false;
  }
};
