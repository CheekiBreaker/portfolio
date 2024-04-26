

activeSlider();
var left = 0;
var timer;

function activeSlider(){
    timer = setTimeout(function (){
        var images = document.getElementById('images');
        left = left -732;
        if (left <-10220){
            left = 0;
            clearTimeout(timer);
        }
        images.style.left = left + 'px';
        activeSlider();
    }, 4000);
}