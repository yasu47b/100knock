// 変数がグローバルを汚染しないように囲む
(function(){
    "use strict";
    var str = "stressed";
    
    console.log(str.split("").reverse().join(""));
    
    // ブラウザ, Web Worker, node.jsのいずれかでグローバルを取得する
    // window, workerGlobalScope
})((this || 0).self || global);
