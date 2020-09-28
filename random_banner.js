
//var random_images_array = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
var images_count = 12;

function ready() {
    var path = 'data/images/banners/'; // default path here
    var imgNum = Math.floor(Math.random() * images_count)+1;
    document.getElementById("banner").style.backgroundImage = `url(${path+imgNum}.jpg)`;
    //document.getElementById("banner").style.backgroundColor = "red";
}


document.addEventListener("DOMContentLoaded", ready);