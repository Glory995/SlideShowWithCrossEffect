(function(){
    "use strict";

    const myImages=[ "images\\download1.jfif","images\\download2.jfif", "images\\download3.jfif", "images\\download4.jfif", "images\\download5.jfif", "images\\download6.jfif", ];

    let currentImage=0;
    const next= document.getElementById("next");
    const previous= document.getElementById("previous")
    const container= document.getElementById("content")

    next.addEventListener("click", nextPhoto)

    previous.addEventListener("click", previousPhoto)


    function nextPhoto(){
        currentImage++;

        if(currentImage > myImages.length-1){currentImage=0}
        document.getElementById("img").src= myImages[currentImage];


    }

    function  previousPhoto(){
        currentImage =currentImage-1;

        if(currentImage < 0){currentImage=5}
        document.getElementById("img").src= myImages[currentImage];

    }

})()