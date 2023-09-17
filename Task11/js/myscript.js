let myDiv = document.getElementById('test');
let arry = ['url(images/portpic1.jpg) no-repeat center/cover', 'url(images/portpic2.jpg) no-repeat center/cover', 'url(images/portpic3.jpg) no-repeat center/cover', 'url(images/portpic4.jpg) no-repeat center/cover', 'url(images/portpic5.jpg) no-repeat center/cover', 'url(images/portpic6.jpg) no-repeat center/cover', 'url(images/portpic7.jpg) no-repeat center/cover', 'url(images/portpic8.jpg) no-repeat center/cover', 'url(images/portpic9.jpg) no-repeat center/cover'];
let counter = 0;
let prev = document.getElementById('btnleft');
let next = document.getElementById('btnright');
function test() {
    myDiv.style.background = arry[counter];
    counter++;
    counter = counter % arry.length;
}
setInterval(test, 3000);
function prevPic() {
    if (counter < 0) {
        console.log('you have reached the beginning of the images. see next images.');
    }
    counter--;
    myDiv.style.background = arry[counter];
}
prev.onclick = prevPic;
function nextPic() {
    if (counter > (arry.length - 1)) {
        console.log('you have reached the end of the images. see previous images.');
    }
    counter++;
    myDiv.style.background = arry[counter];
}
btnright.onclick = nextPic;
