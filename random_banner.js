
var random_images_array = ["1.jpg", "2.jpg", "3.jpg"];

function ready() {
    var path = 'data/images/banners/'; // default path here
    var num = Math.floor(Math.random() * random_images_array.length);
    var img = random_images_array[num];
    var pathImg = path + img;
    document.getElementById("banner").style.backgroundImage = `url(${pathImg})`;
    //document.getElementById("banner").style.backgroundColor = "red";
}


document.addEventListener("DOMContentLoaded", ready);