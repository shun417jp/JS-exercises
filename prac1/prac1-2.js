"use strict"
 let station = window.prompt(`目的の駅を入力してください
 1: A駅
 2: B駅
 3: C駅`);

 station = parseInt(station)

 switch(station){
    case 1:
        window.alert("快速電車が停まります")
        break;
    case 2:
        window.alert("快速電車と急行電車が停まります")
        break;
    case 3:
        window.alert("特急電車が停まります")
 }