"use strict"

let height = window.prompt("身長を入力してください");

if (height === ""){
    window.alert("入力がないと判定できません");
}else{
    if(/^[0-9]+$/.test(height)){ // .testは文字列が正規表現にマッチするかどうかの判定
        if(height >= 100){
            let tic =  window.confirm("プレミアムチケットを持っていますか？")
            if(tic === true){
             window.alert("プレミアムシートに乗車可能です");
            }else{
             window.alert("通常のシートに乗車可能です")
            }
          }else if(height >= 90){
             window.alert("付き添いありで乗車可能です");
          }else{
             window.alert("乗車できません");
          }
        
    }else{
        window.alert("半角数字で入力してください");
    }
}

