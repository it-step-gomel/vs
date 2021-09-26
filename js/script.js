// console.log('Hi!');
function changeVideo(url){
    document.getElementById('video-slider').src = url;
}
// title focus tabs
let timer;
let t = document.querySelector('head title').innerHTML;

function changeTitle(icon, text) {
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}

window.onblur = () => {
    timer = setTimeout(() => {
        changeTitle('./heart.ico', '😭 Вернитесь 😭 ✋');
    }, 3000)
}

window.onfocus = () => {
    clearTimeout(timer);
    changeTitle('./favicon.ico', t);
}
