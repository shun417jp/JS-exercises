'use strict';

const text = document.getElementById("text");
const area = document.getElementById("area");
const list = document.getElementById("list");

function prepend() {
    const now = new Date();
    const nicknameValue = text.value;
    const postTextValue = area.value;

    let post = `${nicknameValue}さんの投稿<br>
    ${postTextValue}<br>
    ${now.toLocaleString()}<br><br>`;

    const listItem = document.createElement('li');
    listItem.innerHTML = post;
    list.prepend(listItem);

    text.value = "";
    area.value = "";
}
