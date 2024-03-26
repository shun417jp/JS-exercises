"use strict";

function btntext() {
    var inputValue = document.getElementById("wordInput").value;
    document.getElementById("result").innerText = inputValue;
}

function backbutton() {
    document.getElementById("result").style.cssText = " ";
}

function btnClick1() {
    document.getElementById("result").style.cssText = "font-family: DotGothic16; color: black; font-size: 20px";
}

function btnClick2() {
    document.getElementById("result").style.cssText = "font-family: Chokokutai; color: yello; font-size: 30px";
}

function btnClick3() {
    document.getElementById("result").style.cssText = "font-family: Shizuru; color: black; font-size: 40px";

}

function btnClick4() {
    document.getElementById("result").style.cssText = "font-family: Rampart One; color: black; font-size: 50px";

}