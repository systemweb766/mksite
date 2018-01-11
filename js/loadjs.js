'use strict'

var loadScript = function(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  if(script.readyState === 'loaded' || script.readyState === 'complete') {
    //IEの処理
    script.onreadystatechange = null;
    callback();
  }else {
    //複数のファイルを読み込む際読み込み順番がずれるので、コールバックを使って関数を呼び出す
    script.onload = function(){
      callback();
    }
  }

  document.getElementsByTagName('head')[0].appendChild(script);
};
