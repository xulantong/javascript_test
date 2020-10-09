
window.onload = function () {

    var slide = document.getElementById('outter');
    var pic = document.getElementById('inner').getElementsByTagName('div');
    var lis = document.getElementById('control').getElementsByTagName('li');
    var arrows = document.getElementById('arrow');
    var arr = arrows.getElementsByClassName('arrow');
    var timer = setInterval(move , 1500);
    var index = 0;

    // 箭头
    arr[0].onclick = function () {
        movePre();
    }
    arr[1].onclick = function () {
        move();
    }

    // 控制点
    for (var i = 0; i < lis.length; i++) {
        lis[i]._index = i;
        lis[i].onclick = function () {
            pic[index].className = "";
            lis[index].className = "";
            this.className = "current";
            pic[this._index].className = "current";
            index = this._index;
        }
    }

    slide.onmouseover = function(){
        clearInterval(timer);
        arrows.style.display = 'inline-block';
    }
    slide.onmouseout = function(){
        timer = setInterval(move , 1500);
        arrows.style.display = 'none';
    }


    function movePre() {
        pic[index].className = "";
        lis[index].className = "";
        index--;
        if (index == -1) {
            index = pic.length - 1;
        }
        pic[index].className = "current";
        lis[index].className = "current";
    }


    function move() {
        pic[index].className = "";
        lis[index].className = "";
        index++;
        if (index == pic.length) {
            index = 0;
        }
        pic[index].className = "current";
        lis[index].className = "current";

    }
}